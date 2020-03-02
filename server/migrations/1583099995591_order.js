/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable("orders", {
    id: {
      type: "uuid",
      unique: true,
      primaryKey: true,
      default: pgm.func("uuid_generate_v4()"),
      comment: "This is the id field"
    },
    category: {
      type: "VARCHAR(2000)",
      nonNull: true
    },
    category_type: {
      type: "VARCHAR(2000)"
    },
    fashion_id: {
      type: "VARCHAR(2000)"
    },
    description: {
      type: "TEXT",
      nonNull: true
    },
    price: {
      type: "VARCHAR(255)",
      nonNull: true
    },
    location: {
      type: "VARCHAR(255)"
    },
    product_image: {
      type: "VARCHAR(2000)",
      nonNull: true
    },
    seller_id: {
      type: "VARCHAR(2000)",
      nonNull: true
    },
    userId: {
      type: "uuid",
      notNull: true,
      references: '"users"',
      onDelete: "cascade"
    },
    createdAt: {
      type: "timestamptz(100)",
      nonNull: true,
      default: pgm.func("current_timestamp")
    }
  });
};

exports.down = pgm => {
  pgm.dropTable("orders");
};
