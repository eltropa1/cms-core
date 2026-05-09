type Props = {
  content: any
}

export function PostContentRenderer({ content }: Props) {

  if (!content?.blocks) return null

  return (

    <div className="space-y-4">

      {content.blocks.map((block: any, i: number) => {

        if (block.type === "paragraph") {
          return (
            <p key={i}>
              {block.data.text}
            </p>
          )
        }

        if (block.type === "cta") {
          return (
            <div
              key={i}
              className="bg-blue-100 p-4 font-semibold"
            >
              {block.data.text}
            </div>
          )
        }

        if (block.type === "infobox") {
          return (
            <div
              key={i}
              className="border-l-4 border-blue-500 p-4 bg-gray-50"
            >
              {block.data.text}
            </div>
          )
        }

        return null

      })}

    </div>

  )
}