exports.up = function(knex, Promise) {
  return knex.schema.createTable("user", table => {
    table
      .increments("id")
      .unique()
      .primary();
    table.string("first_name");
    table.string("last_name");
    table.string("email").unique();
    table.string("phone");
    table.string("password");
    table.boolean("is_admin").defaultTo(false);
    table.string("airport");
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("user");
};
