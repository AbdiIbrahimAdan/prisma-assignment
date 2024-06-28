-- CreateTable
CREATE TABLE "products_table" (
    "id" TEXT NOT NULL,
    "productThumbnail" TEXT NOT NULL,
    "productTitle" TEXT NOT NULL,
    "productDescription" TEXT NOT NULL,
    "productCost" DOUBLE PRECISION NOT NULL,
    "onOffer" BOOLEAN NOT NULL,

    CONSTRAINT "products_table_pkey" PRIMARY KEY ("id")
);
