"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Translations", [
      // LOGIN HEADER
      {
        key: "login.header.home",
        en: "Home",
        sv: "Hem",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "login.header.order",
        en: "Order",
        sv: "Beställning",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "login.header.our_customers",
        en: "Our Customers",
        sv: "Våra Kunder",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "login.header.about_us",
        en: "About Us",
        sv: "Om Oss",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "login.header.contact_us",
        en: "Contact Us",
        sv: "Kontakta Oss",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // LOGIN FORM
      {
        key: "login.form.header",
        en: "Login",
        sv: "Logga In",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "login.form.email_label",
        en: "Email",
        sv: "E-post",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "login.form.email_placeholder",
        en: "Enter your email",
        sv: "Ange din e-post",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "login.form.password_label",
        en: "Password",
        sv: "Lösenord",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "login.form.password_placeholder",
        en: "Enter your password",
        sv: "Ange ditt lösenord",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "login.form.register",
        en: "Register",
        sv: "Registrera",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "login.form.forgot_password",
        en: "Forgot Password?",
        sv: "Glömt Lösenord?",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // LOGIN FOOTER
      {
        key: "login.footer.home",
        en: "Home",
        sv: "Hem",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "login.footer.order",
        en: "Order",
        sv: "Beställning",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "login.footer.contact_us",
        en: "Contact Us",
        sv: "Kontakta Oss",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // PRICELIST SIDEBAR
      {
        key: "pricelist.sidebar.invoices",
        en: "Invoices",
        sv: "Fakturor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.sidebar.customers",
        en: "Customers",
        sv: "Kunder",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.sidebar.my_business",
        en: "My Business",
        sv: "Mitt Företag",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.sidebar.invoice_journal",
        en: "Invoice Journal",
        sv: "Fakturajournal",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.sidebar.price_list",
        en: "Price List",
        sv: "Prislista",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.sidebar.multiple_invoicing",
        en: "Multiple Invoicing",
        sv: "Flerfakturering",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.sidebar.unpaid_invoices",
        en: "Unpaid Invoices",
        sv: "Obetalda Fakturor",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.sidebar.offer",
        en: "Offer",
        sv: "Erbjudande",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.sidebar.inventory_control",
        en: "Inventory Control",
        sv: "Lagerkontroll",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.sidebar.member_invoicing",
        en: "Member Invoicing",
        sv: "Medlemsfakturering",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.sidebar.import",
        en: "Import",
        sv: "Importera",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.sidebar.logout",
        en: "Logout",
        sv: "Logga Ut",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // PRICELIST TABLE
      {
        key: "pricelist.table.article_no_placeholder",
        en: "Search article no.",
        sv: "Sök artikelnr.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.table.product_placeholder",
        en: "Search product",
        sv: "Sök produkt",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.table.new_product",
        en: "New Product",
        sv: "Ny Produkt",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.table.print_list",
        en: "Print List",
        sv: "Skriv Ut Lista",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.table.advanced_mode",
        en: "Advanced Mode",
        sv: "Avancerat Läge",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.table.article_no",
        en: "Article No.",
        sv: "Artikelnr.",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.table.product",
        en: "Product",
        sv: "Produkt",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.table.in_price",
        en: "In Price",
        sv: "Inpris",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.table.price",
        en: "Price",
        sv: "Pris",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.table.in_stock",
        en: "In Stock",
        sv: "I Lager",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        key: "pricelist.table.description",
        en: "Description",
        sv: "Beskrivning",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Translations", null, {});
  },
};
