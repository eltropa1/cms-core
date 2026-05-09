import { useEffect, useRef } from "react";
import EditorJS from "@editorjs/editorjs";
import { Paragraph } from "../editor/paragraph";
import { CTA } from "../editor/cta";
import { Infobox } from "../editor/infobox";

type Props = {
  data?: any;
  onChange?: (data: any) => void;
};

export function PostContentEditor({ data, onChange }: Props) {
  const editorRef = useRef<EditorJS | null>(null);
  const holderRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!holderRef.current) return;

    // 🔒 Evita doble inicialización (React Strict Mode)
    if (editorRef.current) return;

    let isMounted = true;

    const editor = new EditorJS({
  holder: holderRef.current,
  data: data ?? {
    blocks: [
      {
        type: "paragraph",
        data: {
          text: "",
        },
      },
    ],
  },
      tools: {
  paragraph: {
    class: Paragraph,
  },
  cta: {
    class: CTA,
  },
  infobox: {
    class: Infobox,
  },
},
     async onChange() {
  const output = await editor.saver.save();

  const cleanedBlocks = (output.blocks || []).filter((block: any) => {
    if (block.type === "paragraph") {
      const text = block.data?.text;
      return typeof text === "string" && text.trim().length > 0;
    }
    return true;
  });

  onChange?.({
    schemaVersion: 1,
    blocks: cleanedBlocks,
  });
}
    });

    editorRef.current = editor;

    // ✅ Esperamos a que esté listo
    editor.isReady
      .then(() => {
        if (!isMounted) return;
        // Editor listo
      })
      .catch((error) => {
        console.error("EditorJS init error:", error);
      });

    return () => {
      isMounted = false;

      if (editorRef.current) {
        editorRef.current.destroy?.(); // 🔒 safe call
        editorRef.current = null;
      }
    };
  }, []);

  return <div ref={holderRef} className="border p-4 bg-white" />;
}