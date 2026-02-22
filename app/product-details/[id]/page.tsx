import ProductDetails from "./ProductDetails";


const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
    const { id } = await params



    return <div>

        <div className=" max-w-7xl mx-auto " >
            <ProductDetails id={id} />
        </div>

    </div>;
};

export default Page;