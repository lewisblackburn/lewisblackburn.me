"use client";
import { cn } from "@/lib/utils";

interface MediaViewerProps {
  src: string;
  alt?: string;
  type?: "image" | "video";
  className?: string;
  width?: number | string;
  height?: number | string;
}

export function MediaViewer({
  src,
  alt = "",
  type = "image",
  className,
  width,
  height,
}: MediaViewerProps) {
  const containerStyle = {
    ...(width ? { maxWidth: typeof width === "number" ? `${width}px` : width } : {}),
    ...(height ? { height: typeof height === "number" ? `${height}px` : height } : {}),
  };

  const mediaProps = {
    src,
    alt,
    className: cn(
      "w-full h-full object-cover rounded-lg border overflow-hidden",
      !height && "aspect-video", // only apply aspect-video when no explicit height
      className
    ),
  };

  const renderMedia = () => {
    if (type === "video") {
      return (
        <video {...mediaProps} controls loop>
          Your browser does not support the video tag.
        </video>
      );
    }
    // eslint-disable-next-line @next/next/no-img-element, jsx-a11y/alt-text
    return <img {...mediaProps} />;
  };

  return (
    <div className="my-6 w-full">
      <div className="relative w-full aspect-video" style={containerStyle}>
        {renderMedia()}
      </div>
      <p className="text-sm text-fd-muted-foreground">{alt}</p>
    </div>
  );
}

export function ImageViewer(props: Omit<MediaViewerProps, "type">) {
  return <MediaViewer {...props} type="image" />;
}

export function VideoViewer(props: Omit<MediaViewerProps, "type">) {
  return <MediaViewer {...props} type="video" />;
}