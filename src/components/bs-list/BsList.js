import React, { useState } from "react";
import { BsCard } from "../bs-card/BsCard";
const data = [
  {
    id: 1,
    name: "Pepper - Red Chili",
    description:
      "nisl aenean lectus pellentesque eget nunc donec quis orci eget orci vehicula condimentum curabitur in libero ut massa volutpat convallis morbi",
    price: 423,
    image:
      "https://robohash.org/autvoluptatempraesentium.png?size=150x250&set=set1",
    isAvailable: false,
    rating: 5,
    author: "convallis",
  },
  {
    id: 2,
    name: "Spic And Span All Purpose",
    description:
      "eu tincidunt in leo maecenas pulvinar lobortis est phasellus sit amet erat nulla tempus vivamus in felis eu sapien cursus vestibulum proin eu mi nulla ac",
    price: 277,
    discount: 50,
    image: "https://robohash.org/voluptatemfaciliset.png?size=150x250&set=set1",
    isAvailable: true,
    rating: 3,
    author: "sem fusce",
  },
  {
    id: 3,
    name: "Wine - Chateau Timberlay",
    description:
      "congue diam id ornare imperdiet sapien urna pretium nisl ut volutpat sapien arcu sed augue aliquam erat volutpat in congue",
    price: 243,
    discount: 28,
    image:
      "https://robohash.org/laboriosamsedtempore.png?size=150x250&set=set1",
    isAvailable: false,
    rating: 3,
    author: "volutpat",
  },
  {
    id: 4,
    name: "Sea Urchin",
    description:
      "nam congue risus semper porta volutpat quam pede lobortis ligula sit amet eleifend pede libero quis orci nullam molestie nibh in lectus pellentesque at nulla suspendisse potenti cras in purus eu magna vulputate luctus cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus vivamus vestibulum sagittis sapien",
    price: 316,
    discount: 91,
    image: "https://robohash.org/hicquoaut.png?size=150x250&set=set1",
    isAvailable: true,
    rating: 3,
    author: "amet turpis",
  },
  {
    id: 5,
    name: "Cookie - Oatmeal",
    description:
      "vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at turpis a pede posuere nonummy integer non velit donec diam neque vestibulum eget vulputate ut ultrices vel augue vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae donec pharetra magna vestibulum aliquet ultrices",
    price: 151,
    discount: 58,
    image: "https://robohash.org/quiofficiain.png?size=150x250&set=set1",
    isAvailable: true,
    rating: 1,
    author: "ut",
  },
  {
    id: 6,
    name: "Wine - Red, Pinot Noir, Chateau",
    description:
      "nulla facilisi cras non velit nec nisi vulputate nonummy maecenas tincidunt lacus at velit vivamus vel nulla eget eros elementum pellentesque quisque porta volutpat erat quisque erat eros viverra eget congue eget semper rutrum nulla nunc purus phasellus in felis donec semper sapien a libero nam",
    price: 140,
    discount: 87,
    image: "https://robohash.org/asperioresveniamcum.png?size=150x250&set=set1",
    isAvailable: false,
    rating: 3,
    author: "orci pede",
  },
  {
    id: 7,
    name: "Aspic - Amber",
    description:
      "consequat metus sapien ut nunc vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae",
    price: 273,
    discount: 24,
    image:
      "https://robohash.org/eumaperiamdistinctio.png?size=150x250&set=set1",
    isAvailable: false,
    rating: 3,
    author: "a",
  },
  {
    id: 8,
    name: "Tomatoes - Vine Ripe, Red",
    description:
      "eu sapien cursus vestibulum proin eu mi nulla ac enim in tempor turpis nec euismod scelerisque quam turpis adipiscing lorem vitae mattis nibh ligula nec sem duis aliquam convallis nunc proin at",
    price: 211,
    discount: 15,
    image: "https://robohash.org/sedquisrerum.png?size=150x250&set=set1",
    isAvailable: false,
    rating: 2,
    author: "tristique tortor",
  },
  {
    id: 9,
    name: "Cake Circle, Foil, Scallop",
    description:
      "porttitor lorem id ligula suspendisse ornare consequat lectus in est risus auctor sed tristique in tempus sit amet sem fusce consequat",
    price: 224,
    discount: 89,
    image: "https://robohash.org/quoullamsuscipit.png?size=150x250&set=set1",
    isAvailable: false,
    rating: 5,
    author: "sapien quis",
  },
  {
    id: 10,
    name: "Carbonated Water - Wildberry",
    description:
      "sagittis sapien cum sociis natoque penatibus et magnis dis parturient montes nascetur ridiculus mus etiam vel augue vestibulum rutrum rutrum neque aenean auctor gravida sem praesent id massa id nisl venenatis lacinia aenean sit amet justo morbi ut odio cras mi pede malesuada in imperdiet et commodo vulputate",
    price: 469,
    discount: 76,
    image: "https://robohash.org/eadebitisenim.png?size=150x250&set=set1",
    isAvailable: false,
    rating: 1,
    author: "cubilia",
  },
];
export const BsList = () => {
  const [books, setBooks] = useState(data);
  return (
    <div className="mt-2 d-flex justify-content-center flex-wrap">
      {books.map((book) => (
        <BsCard key={book.id} cardData={book} />
      ))}
    </div>
  );
};
