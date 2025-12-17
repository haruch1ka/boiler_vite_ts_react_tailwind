interface ListCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  src: string;
}

export function ListCard({
  title,
  description,
  tags,
  image,
  src,
}: ListCardProps) {
  return (
    <a
      href={src}
      className="block rounded-lg bg-gray-50 p-6 transition-all hover:bg-gray-100 hover:shadow-md"
    >
      <div className="flex gap-6">
        <div className="flex-1 space-y-4">
          <div className="inline-block rounded bg-cyan-500 px-4 py-1.5 text-sm font-medium text-white">
            {title}
          </div>

          <p className="text-sm leading-relaxed text-gray-700">{description}</p>

          <div className="flex flex-wrap gap-2">
            {/* {tags.map((tag, index) => (
              <span key={index} className="text-xs text-gray-600">
                {tag}
              </span>
            ))} */}
          </div>
        </div>

        <div className="relative h-32 w-32 flex-shrink-0">
          <img
            src={image || "/placeholder.svg"}
            alt={title}
            className="h-full w-full rounded border-2 border-gray-200 object-cover"
          />
        </div>
      </div>
    </a>
  );
}
