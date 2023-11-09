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

export interface CustomBlogsCardProps {
    title?: string;
    overview?: string;
    customCss?: string;
}

