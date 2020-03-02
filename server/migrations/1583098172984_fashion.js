/* eslint-disable camelcase */

exports.shorthands = undefined;

exports.up = pgm => {
  pgm.createTable("products", {
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
    description: {
      type: "TEXT",
      nonNull: true
    },
    price: {
      type: "VARCHAR(255)",
      nonNull: true
    },
    location: {
      type: "VARCHAR(255)",
      unique: true
    },
    product_image: {
      type: "VARCHAR(2000)",
      nonNull: true
    },
    user_id: {
      type: "VARCHAR(2000)",
      nonNull: true
    },
    seller_id: {
      type: "VARCHAR(2000)",
      nonNull: true
    },
    user: {
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
  pgm.dropTable("products");
};
