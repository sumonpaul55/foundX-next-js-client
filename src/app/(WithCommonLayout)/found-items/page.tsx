
import Container from "@/src/components/UI/Container";
import FoundItem from "@/src/components/UI/foundItemPosts/FoundItem";
import LoadingBlur from "@/src/components/UI/LoadingBlur";
import axiosInstance from "@/src/lib/AxiosInstance";
import { TFounditemsElements } from "@/src/types";
import React from "react";

const FoundItems = async () => {
    const { data } = await axiosInstance.get("/items")

    return <Container>

        <div>
            {
                data?.data?.map((foundItems: TFounditemsElements, idx: number) => {
                    return <FoundItem items={foundItems} key={idx} />
                })
            }
        </div>
    </Container>
};

export default FoundItems;
