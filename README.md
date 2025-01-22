# LibasG - E-Commerce Marketplace with Sanity CMS

## 📌 Project Overview
The **LibasG** platform integrates **Sanity CMS** with a custom API to manage products seamlessly. It allows for product CRUD operations, fetching product data from Sanity CMS, and displaying it within a Next.js application.

---

## 🌟 Features
- **Fetch All Products**: Retrieve a list of all products stored in Sanity CMS.
- **Fetch Single Product**: Get details of a specific product by its unique ID.
- **Create Product**: Add new products to the CMS with fields like title, price, description, image, and more.
- **Update Product**: Modify details of an existing product by its ID.
- **Responsive Layout**: Display products in a responsive grid layout.

---

## 🏗️ System Architecture

### Frontend
- Built with **Next.js** to render pages and fetch data from APIs.
- **Tailwind CSS** for styling.

### CMS
- **Sanity CMS** is used to manage product data.

### API Endpoints
- **Products API**: Interacts with **Sanity CMS** to fetch, create, and update product data.

### Architecture Diagram
```text
[Frontend (Next.js)]
    |
[Sanity CMS] --> [Product Data API]
```

---

## 📡 API Endpoints

### 1️⃣ GET /api/products
Fetches a list of all products from Sanity CMS.

**Example Response:**
```json
[
  {
    "id": "1",
    "name": "Product A",
    "price": 100,
    "description": "A great product."
  }
]
```

### 2️⃣ GET /api/products/:id
Fetches details of a single product by its unique ID.

**Example Response:**
```json
{
  "id": "1",
  "name": "Product A",
  "price": 100,
  "description": "A great product.",
  "image": "url_to_image",
  "category": "Electronics"
}
```

### 3️⃣ POST /api/products
Creates a new product in Sanity CMS.

**Example Request Body:**
```json
{
  "name": "Product A",
  "price": 100,
  "description": "A great product.",
  "image": "url_to_image",
  "category": "Electronics"
}
```

### 4️⃣ PUT /api/products/:id
Updates an existing product by its ID.

**Example Request Body:**
```json
{
  "name": "Updated Product",
  "price": 120,
  "description": "An updated description.",
  "image": "url_to_updated_image",
  "category": "Electronics"
}
```

---

## 📝 Sanity Schema Documentation

### 1️⃣ Product Schema
Defines the structure of the product document in Sanity CMS.

```javascript
export default {
    name: 'product',
    type: 'document',
    fields: [
      { name: '_id', type: 'string', title: 'Product ID' },
      { name: 'name', type: 'string', title: 'Product Name' },
      { name: 'price', type: 'number', title: 'Price' },
      { name: 'sizes', type: 'array', of: [{ type: 'string' }], title: 'Available Sizes' },
      { name: 'colors', type: 'array', of: [{ type: 'string' }], title: 'Available Colors' },
      { name: 'category', type: 'string', title: 'Product Category' },
      { name: 'imageURL', type: 'image', title: 'Product Image' },
      { name: 'description', type: 'text', title: 'Description' },
      { name: 'discountPercent', type: 'number', title: 'Discount Percent' },
      { name: 'isNew', type: 'boolean', title: 'Is New' }
    ]
  };```
