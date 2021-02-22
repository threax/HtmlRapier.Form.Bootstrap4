# HtmlRapier.Forms.Bootstrap4
This library provides a form template for bootstrap 4. There are a few options for changing the style of the form.

This defines the following form components:
 * hr.forms.default
 * hr.forms.horizontal

## Multi Item Editors
The multi item editors for check boxes, radio buttons and complex object arrays will all be created with the classes buildName card on them. The card will provide a nice border, but the content will always grow to its maximum size.

If you want to control the size of an editor for one of these types create a css class. Here example was the buildName, which should match the property name for the item on your form.
```
    .example.card
    {
        max-height:150px;
        overflow:auto;
    }
```
This will set a max height and make the card scroll if it overflows. Using max-height is ideal so the card will still scale down in size if there are less elements.

## Building Template
To build the template run the following command:
```
htmlrapier-compile .\DefaultForm.html .\src\defaultform.ts hr.form.bootstrap4
```

If you need to install htmlrapier-compile use the following command:
```
npm install -g htmlrapier-compile
```