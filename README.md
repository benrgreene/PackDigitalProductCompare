# Pack Digital Product Compare

This is a plugin for the Pack Default Theme that adds product comparison sections, with goal of adding a high level of control for admins to make it easy to add build content for users

## Sections

There are two sections added to the default theme:

 * Compare Table
 * Static Compare Table

The settings between the two are mostly similar, especially with display options.

### Compare Table

The compare table is the one that customers can add to and remove from. It has a few extra settings for how the CTA for opening the table is displayed.

### Static Compare Table

The static table is a table that can be added to a page with specific products added. Customers don't add/remove products from it, instead it's used for landing pages for stores to showcase the difference between a few products. 

## General Options

There are some general options and goals similar between the tables:

 * Customizable table cells
   * Admins can customize tables by adding which ever options they want to the table, and even set which product types get each product option.
 * Split products by type.
   * There's the option to split products in a compare table by product type. Note that if products aren't split by type, then all products display all selected fields
 * UX Options
   * This plugin tries to make it easy to customize the display of the tables.
 * Build Static Tables
   * Often admins want to add static tables to landing pages to show differences between some flagship products. This plugin doesn't just add a table customers add what they want to track, but also an option for static tables for admins to use for these pages. 
 * Easy For Developers
   * Most code is regulated to the compare table plugin - only code needed in the base Pack theme is to import the plugin's index file, and then to add the "add to compare" button.