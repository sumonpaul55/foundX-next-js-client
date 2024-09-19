import { Home } from "@/src/components/home/Home";
import RecentlyFoundedItem from "@/src/components/home/RecentlyFoundedItem";


export default async function HomePage() {
  return (
    <>
      <Home />
      <RecentlyFoundedItem />
    </>
  );
}
