export type Blogsection = {
    href: string;
    label: string;
    description: string;
    number: string;
}

export type BlogPost = {
    tittle: string;
    paragraphs: string[];
}

export type BlogPostPageProps = {
    params: Promise<{
        "slug": string;
    }>;
}