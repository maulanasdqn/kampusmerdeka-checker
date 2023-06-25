import { FC, Fragment, ReactElement } from "react";
import { useDocs } from "./hook";

export const DocsModule: FC = (): ReactElement => {
  const { data } = useDocs({
    type: "SPTJM,SURAT_REKOMENDASI",
  });
  return (
    <main className="flex items-center justify-center w-full bg-gray-100 h-screen">
      <section className="bg-white p-4 flex items-start justify-start rounded-lg shadow-sm">
        Test Dokumen
        {data?.data?.map((item, key) => (
          <Fragment key={key}>
            <h1>
              Dokumen {item?.name} : {item?.status}
            </h1>
          </Fragment>
        ))}
      </section>
    </main>
  );
};
