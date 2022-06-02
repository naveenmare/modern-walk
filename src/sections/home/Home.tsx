import "./home.css";
import Card from "../../components/card/Card";
import { Link } from "react-router-dom";
import { useQuery } from "react-query";
import { axiosInstance } from "../../services/api.services";

export default function Home() {
  const { isLoading, data } = useQuery(
    "clothing",
    async () => {
      const { data } = await axiosInstance.get("clothing");
      return data;
    },
    { retryDelay: 1000 }
  );

  return (
    <div className="homeContainer">
      <h2>Flash sale</h2>
      <div className="homeFlashSaleItems">
        {isLoading && <div>Loading...</div>}
        {data?.map((item: any) => (
          <Card key={item.id} data={item} />
        ))}
      </div>
      <div className="homeCategories">
        <h2>Categories</h2>
        <div className="homeCategoriesItems">
          <Link to="/mens-clothing" style={{ textDecoration: "none" }}>
            <div className="categoryCard men">Men's Clothing</div>
          </Link>
          <Link to="/womens-clothing" style={{ textDecoration: "none" }}>
            <div className="categoryCard women">Women's Clothing</div>
          </Link>
        </div>
      </div>
    </div>
  );
}
