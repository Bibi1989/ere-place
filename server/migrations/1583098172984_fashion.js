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
    title: {
      type: "VARCHAR(1000)",
      nonNull: true
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
    image_id: {
      type: "VARCHAR(2000)",
      nonNull: true
    },
    stock: {
      type: "VARCHAR(255)",
      default: "1"
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
