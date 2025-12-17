import AppContents from "./AppContents";
import AppHeader from "./AppHeaders";
import AppFooter from "./AppFooter";
import { ListCard } from "./ListCard";
import LinkData from "./../../../data/LinkData";

function Top() {
  return (
    <>
      <main className="min-h-screen bg-white p-8">
        <div className="mx-auto max-w-7xl">
          <h1 className="mb-8 text-3xl font-bold text-balance text-gray-900">
            LP参考サイトリスト
          </h1>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            {LinkData.map((item, index) => (
              <ListCard
                key={index}
                title={item.title}
                description={item.description}
                tags={item.tags}
                image={item.image}
                src={item.src}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
export default Top;
