import { MouseEventHandler } from "react";

export interface Post {
    title: string,
    overview: string,
    content: any,
    _id: string,
    slug: {
        current: string
    },
    _createdAt: string
}

export interface Blog {
    title: string,
    overview: string,
    content: any,
    _id: string,
    slug: {
        current: string
    },
    _createdAt: string
}

export interface Gallery {
    title: string,
    overview?: string,
    content?: any,
    image?: any,
    _id: string,
    slug?: {
        current: string
    },
    _createdAt: string
}

export interface CustomButtonProps {
    title?: string;
    customCss?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface SubHeaderProps {
    title?: string;
    subtitle?: string;
    customCss?: string;
}

export interface PageHeaderProps {
    title?: string;
    subtitle?: string;
}

export interface CustomBlogsCardProps {
    title?: string;
    overview?: string;
    customCss?: string;
}

export interface GallerySectionProps {
    data?: any
}

export interface BlogSectionProps {
    data?: any
}

export interface EmblaCarouselCompProps {
    data?: any
}

