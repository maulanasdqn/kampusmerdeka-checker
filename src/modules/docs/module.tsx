import { FC, ReactElement } from "react";
import { useDocs } from "./hook";

export const DocsModule: FC = (): ReactElement => {
  const { data } = useDocs({
    type: "SPTJM,SURAT_REKOMENDASI",
    programs: "Studi Independen",
  });
  console.log(data);
  return (
    <main className="flex items-center justify-center w-full bg-gray-100 h-screen">
      <section className="bg-white p-4 flex items-start justify-start rounded-lg shadow-sm">
        <h1>Dokumen SPTJM : </h1>
      </section>
    </main>
  );
};
