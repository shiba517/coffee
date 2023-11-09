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

export interface CustomButtonProps {
    title?: string;
    customCss?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}