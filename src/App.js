import React, { useState } from "react";
import "./App.css"

const initialData = [
  {
    "id": "8ed025eb-5c0c-49e6-8fea-f2f7e8ac2a2b",
    "name": "Concrete Breaking",
    "category": "Civil",
    "subCategory": "Labour",
    "cost": 4000,
    "date": "2024-02-18"
  },
  {
    "id": "e02f8112-72d0-40b9-b363-0cb04e5f86e5",
    "name": "Bricks (3000 * 8.8)",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 26400,
    "date": "2024-02-22"
  },
  {
    "id": "d624d168-1d16-4aab-9a8e-4d2952d38365",
    "name": "Sand (100 cft)",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 3500,
    "date": "2024-02-22"
  },
  {
    "id": "412ac19c-8fc9-4dbd-9ec1-70d1006cdf16",
    "name": "Cement (15 x 320)",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 4800,
    "date": "2024-02-22"
  },
  {
    "id": "10eaa9fd-39bf-4b1f-96c7-5447ce551ec6",
    "name": "Van",
    "category": "Transport",
    "subCategory": "Raw Material",
    "cost": 225,
    "date": "2024-02-22"
  },
  {
    "id": "041cb622-94c2-4d5e-96f2-114b023907d8",
    "name": "Raj Mistiri (Chand) Advance",
    "category": "Civil",
    "subCategory": "Labour",
    "cost": 20000,
    "date": "2024-03-04"
  },
  {
    "id": "e27fe300-b171-4aea-8188-09d2d6c9650f",
    "name": "Chips 5/8 (100 cft)",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 7600,
    "date": "2024-03-08"
  },
  {
    "id": "9ff7e05f-4245-4633-b921-c357e6cf4b9a",
    "name": "Sand (100 cft)",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 3500,
    "date": "2024-03-08"
  },
  {
    "id": "4ac4c793-0ad3-480e-890a-b314699ffb91",
    "name": "Rod",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 9000,
    "date": "2024-03-08"
  },
  {
    "id": "f3936c81-4bf1-45c2-bad5-19425449db10",
    "name": "Cement (10 x 315)",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 3150,
    "date": "2024-03-08"
  },
  {
    "id": "6cad6030-68a2-480b-96c6-3761e4245010",
    "name": "Others",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 1350,
    "date": "2024-03-08"
  },
  {
    "id": "297f7568-6b11-4e35-817c-5aec4a15e112",
    "name": "Raj Mistiri (Chand) Advance",
    "category": "Civil",
    "subCategory": "Labour",
    "cost": 10000,
    "date": "2024-03-11"
  },
  {
    "id": "5271fc4b-4059-40a2-ad39-5ba296e00318",
    "name": "Bricks (1500 x 8.8)",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 13200,
    "date": "2024-03-16"
  },
  {
    "id": "7f168036-f8ef-4ba3-93d6-048db1ab1d53",
    "name": "Sand (100 cft)",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 3500,
    "date": "2024-03-16"
  },
  {
    "id": "a10b05aa-8724-415a-b55a-a5a5d3c0fb56",
    "name": "Cement (10 x 315)",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 3150,
    "date": "2024-03-16"
  },
  {
    "id": "250b82ac-d576-47e7-ba76-95a3de484c05",
    "name": "Welding",
    "category": "Grill",
    "subCategory": "Labour",
    "cost": 400,
    "date": "2024-03-19"
  },
  {
    "id": "69b35605-5a89-46a7-99d7-167a7c33fb2e",
    "name": "Raj Mistiri (Chand) Advance",
    "category": "Civil",
    "subCategory": "Labour",
    "cost": 20000,
    "date": "2024-03-21"
  },
  {
    "id": "0b5d1ba8-6913-4739-89bc-9bc337fd2641",
    "name": "Tin and accessories",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 15900,
    "date": "2024-03-21"
  },
  {
    "id": "46a2100f-d914-4718-a675-a15c2712214f",
    "name": "Cement and others",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 19925,
    "date": "2024-03-21"
  },
  {
    "id": "a83da593-4280-4fdd-8207-17fb0b1f65a1",
    "name": "Van (Pipe and Angle)",
    "category": "Transport",
    "subCategory": "Raw Material",
    "cost": 300,
    "date": "2024-03-22"
  },
  {
    "id": "cbc45e3b-6cac-4ea2-919f-9eb9121d11be",
    "name": "Van (Pipeline Materials)",
    "category": "Transport",
    "subCategory": "Raw Material",
    "cost": 100,
    "date": "2024-03-23"
  },
  {
    "id": "80266ff3-2d85-4a3d-8e4a-c65a40167b95",
    "name": "Electrician Advance",
    "category": "Electrical",
    "subCategory": "Labour",
    "cost": 1000,
    "date": "2024-03-23"
  },
  {
    "id": "1eb98296-d332-42e5-bab3-e24a554fecb8",
    "name": "Pipeline Maerial",
    "category": "Pipeline",
    "subCategory": "Raw Material",
    "cost": 17700,
    "date": "2024-03-26"
  },
  {
    "id": "37424924-a761-4f7c-ba7e-f2e2438bbc25",
    "name": "Pipeline Advance",
    "category": "Pipeline",
    "subCategory": "Labour",
    "cost": 4000,
    "date": "2024-03-26"
  },
  {
    "id": "ad49e8d3-9c54-4376-9498-b4136aeb85a5",
    "name": "Grill Advance",
    "category": "Grill",
    "subCategory": "Labour",
    "cost": 2000,
    "date": "2024-03-28"
  },
  {
    "id": "fbf3250e-a68a-4fef-8815-c10809d85ecc",
    "name": "Bricks (400 x 8.8)",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 3520,
    "date": "2024-03-31"
  },
  {
    "id": "2a899f84-2607-4014-802e-97fbe19f8cec",
    "name": "Sand (100 cft)",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 3500,
    "date": "2024-03-31"
  },
  {
    "id": "8a982b61-3f3c-458b-a654-f7b4f004e046",
    "name": "Cement (20 x 350)",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 7000,
    "date": "2024-03-31"
  },
  {
    "id": "7abeae08-0d3b-4e5d-bd2a-9ccf5356090e",
    "name": "Van",
    "category": "Transport",
    "subCategory": "Raw Material",
    "cost": 380,
    "date": "2024-03-30"
  },
  {
    "id": "8a11fb00-1a3f-4854-99e5-15a87cb8fd3b",
    "name": "Electrician Advance",
    "category": "Electrical",
    "subCategory": "Labour",
    "cost": 5000,
    "date": "2024-04-02"
  },
  {
    "id": "efcf5d03-9427-4c64-963b-f91f091e4048",
    "name": "Electrical Materials",
    "category": "Electrical",
    "subCategory": "Raw Material",
    "cost": 10000,
    "date": "2024-04-02"
  },
  {
    "id": "e63264bf-df66-4641-b2ee-c2e9113b5796",
    "name": "Raj Mistiri (Chand) Advance",
    "category": "Civil",
    "subCategory": "Labour",
    "cost": 15000,
    "date": "2024-04-04"
  },
  {
    "id": "473d332f-0b9e-4747-b7c2-94a45f73dc9d",
    "name": "Grill Advance",
    "category": "Grill",
    "subCategory": "Labour",
    "cost": 8000,
    "date": "2024-04-07"
  },
  {
    "id": "9d2f6e57-6d2c-4764-9fea-7aee8e9895c7",
    "name": "Electrician Advance",
    "category": "Electrical",
    "subCategory": "Labour",
    "cost": 5000,
    "date": "2024-04-14"
  },
  {
    "id": "0bf82c14-5643-4476-a85f-8d6d2f0eddd3",
    "name": "Raj Mistiri (Chand) Advance",
    "category": "Civil",
    "subCategory": "Labour",
    "cost": 20000,
    "date": "2024-04-14"
  },
  {
    "id": "988d6dd0-3cf3-4983-ab12-31fe5623dcd8",
    "name": "Grill Advance",
    "category": "Grill",
    "subCategory": "Labour",
    "cost": 1000,
    "date": "2024-04-16"
  },
  {
    "id": "c7dc91d1-3060-49a3-b26f-b7f683e93d0e",
    "name": "Sand, Cement, Chips",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 11200,
    "date": "2024-04-27"
  },
  {
    "id": "c3defac7-768d-49b5-a6c7-670641c75f72",
    "name": "Water Tank",
    "category": "Pipeline",
    "subCategory": "Raw Material",
    "cost": 8900,
    "date": "2025-05-07"
  },
  {
    "id": "a733faeb-3868-4539-a6d0-bbd66b73dffd",
    "name": "Pipeline Material",
    "category": "Pipeline",
    "subCategory": "Raw Material",
    "cost": 849,
    "date": "2024-05-07"
  },
  {
    "id": "6bf393bd-bda5-423f-b59d-2e2de4f2219b",
    "name": "Pipeline Advance",
    "category": "Pipeline",
    "subCategory": "Labour",
    "cost": 3000,
    "date": "2024-05-15"
  },
  {
    "id": "68d6e469-bc3a-436a-848d-82c7873c99b2",
    "name": "Pipeline Material",
    "category": "Pipeline",
    "subCategory": "Raw Material",
    "cost": 11000,
    "date": "2024-05-21"
  },
  {
    "id": "3d48b57f-51f2-4110-ba3b-d63af04e45d6",
    "name": "Pipeline Advance",
    "category": "Pipeline",
    "subCategory": "Labour",
    "cost": 600,
    "date": "2024-05-24"
  },
  {
    "id": "30e63be6-1dcc-4020-9941-3cf0f6dcf6a1",
    "name": "Raj Mistiri (Chand) Advance",
    "category": "Civil",
    "subCategory": "Labour",
    "cost": 10000,
    "date": "2024-05-24"
  },
  {
    "id": "a452a0df-eb58-452a-bc15-db0812b42eb9",
    "name": "Tile Materials",
    "category": "Tiles",
    "subCategory": "Raw Material",
    "cost": 75000,
    "date": "2024-06-01"
  },
  {
    "id": "b536c6da-b545-4a00-8156-edd2ee19f041",
    "name": "Tiles Advance",
    "category": "Tiles",
    "subCategory": "Labour",
    "cost": 3000,
    "date": "2024-06-10"
  },
  {
    "id": "2089aa9a-f533-4f38-aa5e-5971db71752a",
    "name": "Pipeline Material",
    "category": "Pipeline",
    "subCategory": "Raw Material",
    "cost": 4750,
    "date": "2024-06-14"
  },
  {
    "id": "58c9bc1f-f29f-4944-a425-5547e7c06f20",
    "name": "Tiles Advance",
    "category": "Tiles",
    "subCategory": "Labour",
    "cost": 1050,
    "date": "2024-06-14"
  },
  {
    "id": "5690be37-1abb-40cc-97a9-fbf30dceaaea",
    "name": "Sand (For Tiles)",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 1750,
    "date": "2024-06-17"
  },
  {
    "id": "56d5fe1f-6d06-4e9a-87b4-56bac0be7feb",
    "name": "Tiles Advance",
    "category": "Tiles",
    "subCategory": "Labour",
    "cost": 5000,
    "date": "2024-06-17"
  },
  {
    "id": "b8e1f768-9159-41a4-a667-1fff7eb2a027",
    "name": "Tiles Advance",
    "category": "Tiles",
    "subCategory": "Labour",
    "cost": 10000,
    "date": "2024-06-21"
  },
  {
    "id": "37d83cb2-e379-4472-8ed3-06909052efe2",
    "name": "Tile Materials",
    "category": "Tiles",
    "subCategory": "Raw Material",
    "cost": 6000,
    "date": "2024-06-25"
  },
  {
    "id": "fdedb137-51d9-4007-b8ee-2508f39808bc",
    "name": "Tiles Advance",
    "category": "Tiles",
    "subCategory": "Labour",
    "cost": 2000,
    "date": "2024-06-30"
  },
  {
    "id": "d28c35df-8722-4241-aac9-4a5982468b8d",
    "name": "Cement and Sand (For Tiles)",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 11200,
    "date": "2024-07-04"
  },
  {
    "id": "154b31b2-899d-4fa7-8012-b0a2890bef65",
    "name": "Raj Mistiri (Chand) Advance",
    "category": "Civil",
    "subCategory": "Labour",
    "cost": 26800,
    "date": "2024-07-04"
  },
  {
    "id": "df07e3df-02f8-4472-acab-075dbc276e38",
    "name": "Tiles Advance",
    "category": "Tiles",
    "subCategory": "Labour",
    "cost": 2150,
    "date": "2024-07-05"
  },
  {
    "id": "578b174b-0753-428d-b8f4-d76ac7860a4f",
    "name": "Cement (For Tiles)",
    "category": "Civil",
    "subCategory": "Raw Material",
    "cost": 350,
    "date": "2024-07-05"
  },
  {
    "id": "40a9cd90-c2c2-4532-8e6c-d80b28b31e43",
    "name": "Tiles Advance",
    "category": "Tiles",
    "subCategory": "Labour",
    "cost": 6000,
    "date": "2024-07-12"
  },
  {
    "id": "811bb8a5-584f-4b65-ad9d-28b31faff1ef",
    "name": "Tile Materials",
    "category": "Tiles",
    "subCategory": "Raw Material",
    "cost": 330,
    "date": "2024-07-05"
  },
  {
    "id": "3a629268-c7c3-49e0-8147-98140775ae62",
    "name": "Interior Materials",
    "category": "Interior",
    "subCategory": "Raw Material",
    "cost": 50000,
    "date": "2024-07-23"
  },
  {
    "id": "83c118a4-c1a7-49f5-9093-abcdf3d2aba7",
    "name": "Tiles Advance",
    "category": "Tiles",
    "subCategory": "Labour",
    "cost": 2000,
    "date": "2024-07-25"
  },
  {
    "id": "439fd89c-2ac4-43b7-bb5e-b6e8bc6dcbe0",
    "name": "Electrician Advance",
    "category": "Electrical",
    "subCategory": "Labour",
    "cost": 10000,
    "date": "2024-07-25"
  },
  {
    "id": "a6e7ceb9-3991-4407-868b-b87bfef182ce",
    "name": "Grill Material",
    "category": "Grill",
    "subCategory": "Raw Material",
    "cost": 100000,
    "date": "2024-08-01"
  },
  {
    "id": "c0e22547-b404-4760-a136-22f0eac912bb",
    "name": "Color Material",
    "category": "Color",
    "subCategory": "Raw Material",
    "cost": 6700,
    "date": "2024-08-04"
  },
  {
    "id": "e6123fbd-835f-4866-8dfc-a81f382d3132",
    "name": "Color Advance",
    "category": "Color",
    "subCategory": "Labour",
    "cost": 13000,
    "date": "2024-08-09"
  },
  {
    "id": "6ebbe780-eab3-4703-a422-2626bf4cb9b8",
    "name": "Elecrtician Advance",
    "category": "Electrical",
    "subCategory": "Labour",
    "cost": 6000,
    "date": "2024-08-09"
  },
  {
    "id": "70d9d98e-c0a7-4347-b291-6b26a3350791",
    "name": "Color Material",
    "category": "Color",
    "subCategory": "Raw Material",
    "cost": 7100,
    "date": "2024-08-10"
  },
  {
    "id": "076d3598-93d7-4b4c-a158-4d3349890d01",
    "name": "Window",
    "category": "Grill",
    "subCategory": "Raw Material",
    "cost": 50000,
    "date": "2024-08-10"
  },
  {
    "id": "6feac149-e7e5-4948-856e-d9283116a5a4",
    "name": "Grill Advance",
    "category": "Grill",
    "subCategory": "Labour",
    "cost": 9000,
    "date": "2024-08-10"
  },
  {
    "id": "95c1c279-09ec-43ae-b226-b2b9156fcc64",
    "name": "Tiles Advance",
    "category": "Tiles",
    "subCategory": "Labour",
    "cost": 1000,
    "date": "2024-08-10"
  },
  {
    "id": "a2583f08-37d6-4462-978a-3577c896be0c",
    "name": "Pipeline Material (Bathroom)",
    "category": "Pipeline",
    "subCategory": "Raw Material",
    "cost": 20000,
    "date": "2024-08-20"
  }
]

function App() {
  const [data, setData] = useState(initialData);
  const [filters, setFilters] = useState({
    category: [],
    subCategory: [],
    month: "",
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => {
      if (name === "category" || name === "subCategory") {
        const values = Array.from(
          e.target.selectedOptions,
          (option) => option.value
        );
        return { ...prevFilters, [name]: values };
      } else {
        return { ...prevFilters, [name]: value };
      }
    });
  };

  const filteredData = data.filter((item) => {
    const monthMatches =
      !filters.month || item.date.startsWith(filters.month);
    const categoryMatches =
      filters.category.length === 0 || filters.category.includes(item.category);
    const subCategoryMatches =
      filters.subCategory.length === 0 ||
      filters.subCategory.includes(item.subCategory);
    return monthMatches && categoryMatches && subCategoryMatches;
  });

  const totalCost = filteredData.reduce((acc, item) => acc + item.cost, 0);

  return (
    <div className="App">
      <h1>Filterable Data Table</h1>

      <div className="filters">
        <select
          name="category"
          multiple
          onChange={handleFilterChange}
          value={filters.category}
        >
          <option value="" disabled>
            Select Category
          </option>
          <option value="Civil">Civil</option>
          <option value="Electrical">Electrical</option>
          <option value="Pipeline">Pipeline</option>
          <option value="Interior">Interior</option>
          <option value="Grill">Grill</option>
          <option value="Furniture">Furniture</option>
          <option value="Tiles">Tiles</option>
          <option value="Transport">Transport</option>
          <option value="Color">Color</option>
        </select>

        <select
          name="subCategory"
          multiple
          onChange={handleFilterChange}
          value={filters.subCategory}
        >
          <option value="" disabled>
            Select Sub-Category
          </option>
          <option value="Labour">Labour</option>
          <option value="Raw Material">Raw Material</option>
        </select>

        <input
          type="month"
          name="month"
          value={filters.month}
          multiple
          onChange={handleFilterChange}
        />
      </div>

      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Name</th>
            <th>Cost</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((item) => (
            <tr key={item.id}>
              <td>{item.date}</td>
              <td>{item.name}</td>
              <td>{item.cost}</td>
            </tr>
          ))}
        </tbody>
        <tfoot>
          <tr>
            <td colSpan="2">Total Cost</td>
            <td>{totalCost}</td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
}

export default App;
