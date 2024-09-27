import Container from "@/src/components/UI/Container";
import FoundItem from "@/src/components/UI/foundItemPosts/FoundItem";

import { getPost } from "@/src/services/post";

interface IProps {
    params: {
        itemId: string;
    };
}

const ItemDetailPage = async ({ params: { itemId } }: IProps) => {
    const { data: post } = await getPost(itemId);

    return (
        <Container>
            <div className="mx-auto my-3 max-w-[720px]">
                <FoundItem key={post?._id} items={post} />

            </div>
        </Container>
    );
};

export default ItemDetailPage;