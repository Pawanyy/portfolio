import type { PaginateFunction } from 'astro';
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';
import type { Project } from '~/types';
import { APP_PROJECT } from '~/utils/config';
import {
  cleanSlug,
  trimSlash,
  PROJECT_BASE,
  PROJECT_PERMALINK_PATTERN,
  PROJECT_CATEGORY_BASE,
  PROJECT_TAG_BASE,
} from './permalinks';

const generatePermalink = async ({
  id,
  slug,
  publishDate,
  category,
}: {
  id: string;
  slug: string;
  publishDate: Date;
  category: string | undefined;
}) => {
  const year = String(publishDate.getFullYear()).padStart(4, '0');
  const month = String(publishDate.getMonth() + 1).padStart(2, '0');
  const day = String(publishDate.getDate()).padStart(2, '0');
  const hour = String(publishDate.getHours()).padStart(2, '0');
  const minute = String(publishDate.getMinutes()).padStart(2, '0');
  const second = String(publishDate.getSeconds()).padStart(2, '0');

  const permalink = PROJECT_PERMALINK_PATTERN.replace('%slug%', slug)
    .replace('%id%', id)
    .replace('%category%', category || '')
    .replace('%year%', year)
    .replace('%month%', month)
    .replace('%day%', day)
    .replace('%hour%', hour)
    .replace('%minute%', minute)
    .replace('%second%', second);

  return permalink
    .split('/')
    .map((el) => trimSlash(el))
    .filter((el) => !!el)
    .join('/');
};

const getNormalizedProject = async (project: CollectionEntry<'project'>): Promise<Project> => {
  const { id, slug: rawSlug = '', data } = project;
  const { Content, remarkPluginFrontmatter } = await project.render();

  const {
    publishDate: rawPublishDate = new Date(),
    updateDate: rawUpdateDate,
    title,
    excerpt,
    image,
    tags: rawTags = [],
    category: rawCategory,
    author,
    draft = false,
    metadata = {},
  } = data;

  const slug = cleanSlug(rawSlug); // cleanSlug(rawSlug.split('/').pop());
  const publishDate = new Date(rawPublishDate);
  const updateDate = rawUpdateDate ? new Date(rawUpdateDate) : undefined;
  const category = rawCategory ? cleanSlug(rawCategory) : undefined;
  const tags = rawTags.map((tag: string) => cleanSlug(tag));

  return {
    id: id,
    slug: slug,
    permalink: await generatePermalink({ id, slug, publishDate, category }),

    publishDate: publishDate,
    updateDate: updateDate,

    title: title,
    excerpt: excerpt,
    image: image,

    category: category,
    tags: tags,
    author: author,

    draft: draft,

    metadata,

    Content: Content,
    // or 'content' in case you consume from API

    readingTime: remarkPluginFrontmatter?.readingTime,
  };
};

const getRandomizedProjects = (array: Project[], num: number) => {
  const newArray: Project[] = [];

  while (newArray.length < num && array.length > 0) {
    const randomIndex = Math.floor(Math.random() * array.length);
    newArray.push(array[randomIndex]);
    array.splice(randomIndex, 1);
  }

  return newArray;
};

const load = async function (): Promise<Array<Project>> {
  const projects = await getCollection('project');
  const normalizedProjects = projects.map(async (project) => await getNormalizedProject(project));

  const results = (await Promise.all(normalizedProjects))
    .sort((a, b) => b.publishDate.valueOf() - a.publishDate.valueOf())
    .filter((project) => !project.draft);

  return results;
};

let _projects: Array<Project>;

/** */
export const isProjectEnabled = APP_PROJECT.isEnabled;
export const isRelatedProjectsEnabled = APP_PROJECT.isRelatedProjectsEnabled;
export const isProjectListRouteEnabled = APP_PROJECT.list.isEnabled;
export const isProjectRouteEnabled = APP_PROJECT.project.isEnabled;
export const isProjectCategoryRouteEnabled = APP_PROJECT.category.isEnabled;
export const isProjectTagRouteEnabled = APP_PROJECT.tag.isEnabled;

export const projectListRobots = APP_PROJECT.list.robots;
export const projectRobots = APP_PROJECT.project.robots;
export const projectCategoryRobots = APP_PROJECT.category.robots;
export const projectTagRobots = APP_PROJECT.tag.robots;

export const projectsPerPage = APP_PROJECT?.projectsPerPage;

/** */
export const fetchProjects = async (): Promise<Array<Project>> => {
  if (!_projects) {
    _projects = await load();
  }

  return _projects;
};

/** */
export const findProjectsBySlugs = async (slugs: Array<string>): Promise<Array<Project>> => {
  if (!Array.isArray(slugs)) return [];

  const projects = await fetchProjects();

  return slugs.reduce(function (r: Array<Project>, slug: string) {
    projects.some(function (project: Project) {
      return slug === project.slug && r.push(project);
    });
    return r;
  }, []);
};

/** */
export const findProjectsByIds = async (ids: Array<string>): Promise<Array<Project>> => {
  if (!Array.isArray(ids)) return [];

  const projects = await fetchProjects();

  return ids.reduce(function (r: Array<Project>, id: string) {
    projects.some(function (project: Project) {
      return id === project.id && r.push(project);
    });
    return r;
  }, []);
};

/** */
export const findLatestProjects = async ({ count }: { count?: number }): Promise<Array<Project>> => {
  const _count = count || 4;
  const projects = await fetchProjects();

  return projects ? projects.slice(0, _count) : [];
};

/** */
export const getStaticPathsProjectList = async ({ paginate }: { paginate: PaginateFunction }) => {
  if (!isProjectEnabled || !isProjectListRouteEnabled) return [];
  return paginate(await fetchProjects(), {
    params: { project: PROJECT_BASE || undefined },
    pageSize: projectsPerPage,
  });
};

/** */
export const getStaticPathsProject = async () => {
  if (!isProjectEnabled || !isProjectRouteEnabled) return [];
  return (await fetchProjects()).flatMap((project) => ({
    params: {
      project: project.permalink,
    },
    props: { project },
  }));
};

/** */
export const getStaticPathsProjectCategory = async ({ paginate }: { paginate: PaginateFunction }) => {
  if (!isProjectEnabled || !isProjectCategoryRouteEnabled) return [];

  const projects = await fetchProjects();
  const categories = new Set<string>();
  projects.map((project) => {
    typeof project.category === 'string' && categories.add(project.category.toLowerCase());
  });

  return Array.from(categories).flatMap((category) =>
    paginate(
      projects.filter((project) => typeof project.category === 'string' && category === project.category.toLowerCase()),
      {
        params: { category: category, project: PROJECT_CATEGORY_BASE || undefined },
        pageSize: projectsPerPage,
        props: { category },
      }
    )
  );
};

/** */
export const getStaticPathsProjectTag = async ({ paginate }: { paginate: PaginateFunction }) => {
  if (!isProjectEnabled || !isProjectTagRouteEnabled) return [];

  const projects = await fetchProjects();
  const tags = new Set<string>();
  projects.map((project) => {
    Array.isArray(project.tags) && project.tags.map((tag) => tags.add(tag.toLowerCase()));
  });

  return Array.from(tags).flatMap((tag) =>
    paginate(
      projects.filter(
        (project) => Array.isArray(project.tags) && project.tags.find((elem) => elem.toLowerCase() === tag)
      ),
      {
        params: { tag: tag, project: PROJECT_TAG_BASE || undefined },
        pageSize: projectsPerPage,
        props: { tag },
      }
    )
  );
};

/** */
export function getRelatedProjects(allProjects: Project[], currentSlug: string, currentTags: string[]) {
  if (!isProjectEnabled || !isRelatedProjectsEnabled) return [];

  const relatedProjects = getRandomizedProjects(
    allProjects.filter(
      (project) => project.slug !== currentSlug && project.tags?.some((tag) => currentTags.includes(tag))
    ),
    APP_PROJECT.relatedProjectsCount
  );

  if (relatedProjects.length < APP_PROJECT.relatedProjectsCount) {
    const moreProjects = getRandomizedProjects(
      allProjects.filter(
        (project) => project.slug !== currentSlug && !project.tags?.some((tag) => currentTags.includes(tag))
      ),
      APP_PROJECT.relatedProjectsCount - relatedProjects.length
    );
    relatedProjects.push(...moreProjects);
  }

  return relatedProjects;
}
