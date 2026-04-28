import { SVGProps } from "react";
import { GithubSvg } from "./github";
import { LinkedinSvg } from "./linkedin";
import { InstagramSvg } from "./instagram";

const iconsMap = {
    github: GithubSvg,
    linkedin: LinkedinSvg,
    instagram: InstagramSvg
} as const;

type TIconName = keyof typeof iconsMap;

type TIconProps = {
    name: TIconName;
    size?: number;
} & SVGProps<SVGSVGElement>;

export function Icon({
    name,
    size = 24,
    className,
    ...props
}: TIconProps) {
    const IconComponent = iconsMap[name];

    return (
        <IconComponent
            width={size}
            height={size}
            className={className}
            {...props}
        />
    );
}
