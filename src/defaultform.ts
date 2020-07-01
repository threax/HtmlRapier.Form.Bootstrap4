///<amd-module name="hr.form.bootstrap4"/>

import * as component from 'hr.components';
import {ComponentBuilder, VariantBuilder} from 'hr.componentbuilder';

var builder;

builder = new ComponentBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group"> <label for="{{uniqueId}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> {{if xUi.autocomplete}} <input id="{{uniqueId}}" class="form-control" name="{{buildName}}" type="{{buildType}}" list="{{uniqueId}}-datalist" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"> <datalist id="{{uniqueId}}-datalist"></datalist> {{else}} <input id="{{uniqueId}}" class="form-control" name="{{buildName}}" type="{{buildType}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> {{/if}} </div> </div>');
builder.addVariant("date-time", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group"> <label for="{{uniqueId}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <input id="{{uniqueId}}" class="form-control" name="{{buildName}}" type="text" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div>'));
builder.addVariant("date", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group"> <label for="{{uniqueId}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <input id="{{uniqueId}}" class="form-control" name="{{buildName}}" type="text" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div>'));
builder.addVariant("textarea", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group"> <label for="{{uniqueId}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <textarea id="{{uniqueId}}" class="form-control" name="{{buildName}}" rows="{{size}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"></textarea> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div>'));
builder.addVariant("file", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group"> <label for="{{uniqueId}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <input id="{{uniqueId}}" class="form-control-file" name="{{buildName}}" type="{{buildType}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div>'));
builder.addVariant("checkbox", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group"> <div class="form-check"> <input type="checkbox" class="form-check-input" name="{{buildName}}" value="{{buildValue}}" id="{{uniqueId}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"> <label class="form-check-label" for="{{uniqueId}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div> </div>'));
builder.addVariant("hidden", new VariantBuilder('<input id="{{uniqueId}}" type="hidden" name="{{buildName}}">'));
builder.addVariant("number", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group"> <label for="{{uniqueId}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <input id="{{uniqueId}}" class="form-control" name="{{buildName}}" type="number" step="any" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div>'));
builder.addVariant("select", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group"> <label for="{{uniqueId}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <select id="{{uniqueId}}" class="form-control" name="{{buildName}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"></select> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div>'));
builder.addVariant("multiselect", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group"> <label for="{{uniqueId}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <select id="{{uniqueId}}" class="form-control" name="{{buildName}}" multiple="" size="{{size}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"></select> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div>'));
builder.addVariant("arrayEditor", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group"> <label data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="{{buildName}} card" data-hr-toggle="{{buildName}}Error" data-hr-class-on="border-danger"> <div class="card-body"> <div data-hr-view="items" data-hr-view-component="hr.forms.default-arrayEditorItem"></div> <button type="button" class="btn btn-default" data-hr-on-click="add">Add</button> </div> </div> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div>'));
builder.addVariant("objectEditor", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group"> <label data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="{{buildName}} card" data-hr-toggle="{{buildName}}Error" data-hr-class-on="border-danger"> <div class="card-body"> <div data-hr-view="items" data-hr-view-component="hr.forms.default-objectEditorItem"></div> </div> </div> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div>'));
builder.addVariant("multicheckbox", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group"> <label data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="{{buildName}} card" data-hr-toggle="{{buildName}}Error" data-hr-class-on="border-danger"> <div class="card-body pt-1 pb-1 pl-2 pr-2"> {{if xUi.selectAll}} <div class="form-check"><input type="checkbox" class="form-check-input" id="{{uniqueId}}-hr-multicheck-selectall" value="true" data-hr-on-click="selectAll" data-hr-handle="selectAll"><label class="form-check-label" for="{{uniqueId}}-hr-multicheck-selectall">Select All</label></div> {{/if}} <div data-hr-view="items" class="p0" data-hr-view-component="hr.forms.default-multicheckboxitem"></div> </div> </div> <div class="clearfix"></div> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div>'));
builder.addVariant("radiobutton", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group"> <label data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="{{buildName}} card" data-hr-toggle="{{buildName}}Error" data-hr-class-on="border-danger"> <div class="card-body pt-1 pb-1 pl-2 pr-2"> <div data-hr-view="items" data-hr-view-component="hr.forms.default-radiobutton"></div> </div> </div> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div>'));
builder.addVariant("search", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group"> <label for="{{uniqueId}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div data-hr-on-focusout="stopSearch" data-hr-handle="searchFocusParent"> <input id="{{uniqueId}}" class="form-control" name="{{buildName}}" type="text" data-hr-on-input="updateSearch" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"> <div class="dropdown" data-hr-toggle="popup" data-hr-class-on="show"> <div class="dropdown-menu" data-hr-view="results" data-hr-view-component="hr.forms.default-searchResult" data-hr-toggle="popup" data-hr-class-on="show"></div> </div> </div> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div>'));
component.register("hr.forms.default", builder);

builder = new ComponentBuilder('<div class="form-check"><input type="checkbox" class="form-check-input" value="{{value}}" data-hr-handle="check" id="{{uniqueId}}"><label class="form-check-label" for="{{uniqueId}}">{{label}}</label></div>');
component.register("hr.forms.default-multicheckboxitem", builder);

builder = new ComponentBuilder('<div class="form-check"><input type="radio" class="form-check-input" id="{{uniqueId}}" name="{{name}}" value="{{value}}" data-hr-handle="radio"><label class="form-check-label" for="{{uniqueId}}">{{label}}</label></div>');
component.register("hr.forms.default-radiobutton", builder);

builder = new ComponentBuilder('<div class="card mb-2"><div class="card-body"><button type="button" data-hr-on-click="remove" class="btn btn-default" data-hr-form-end="">Remove</button></div></div>');
component.register("hr.forms.default-arrayEditorItem", builder);

builder = new ComponentBuilder('<div></div>');
component.register("hr.forms.default-objectEditorItem", builder);

builder = new ComponentBuilder('<a href="#" class="dropdown-item" data-hr-on-click="selectItem">{{title}}</a>');
builder.addVariant("message", new VariantBuilder('<a class="dropdown-item">{{title}}</a>'));
component.register("hr.forms.default-searchResult", builder);

builder = new ComponentBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group row"> <label for="{{uniqueId}}" class="col-sm-2 col-form-label" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="col-sm-10"> {{if xUi.autocomplete}} <input id="{{uniqueId}}" class="form-control" name="{{buildName}}" type="{{buildType}}" list="{{uniqueId}}-datalist" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"> <datalist id="{{uniqueId}}-datalist"></datalist> {{else}} <input id="{{uniqueId}}" class="form-control" name="{{buildName}}" type="{{buildType}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"> {{/if}} <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div> </div>');
builder.addVariant("date-time", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group row"> <label for="{{uniqueId}}" class="col-sm-2 col-form-label" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="col-sm-10"> <input id="{{uniqueId}}" class="form-control" name="{{buildName}}" type="text" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div> </div>'));
builder.addVariant("date", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group row"> <label for="{{uniqueId}}" class="col-sm-2 col-form-label" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="col-sm-10"> <input id="{{uniqueId}}" class="form-control" name="{{buildName}}" type="text" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div> </div>'));
builder.addVariant("textarea", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group row"> <label for="{{uniqueId}}" class="col-sm-2 col-form-label" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="col-sm-10"> <textarea id="{{uniqueId}}" class="form-control" name="{{buildName}}" rows="{{size}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"></textarea> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div> </div>'));
builder.addVariant("file", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group row"> <label for="{{uniqueId}}" class="col-sm-2 col-form-label" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="col-sm-10"> <input id="{{uniqueId}}" class="form-control-file mt-2" name="{{buildName}}" type="{{buildType}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div> </div>'));
builder.addVariant("checkbox", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group"> <div class="form-check"> <input type="checkbox" class="form-check-input" name="{{buildName}}" value="{{buildValue}}" id="{{uniqueId}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"> <label class="form-check-label" for="{{uniqueId}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div> </div>'));
builder.addVariant("hidden", new VariantBuilder('<input type="hidden" name="{{buildName}}">'));
builder.addVariant("number", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group row"> <label for="{{uniqueId}}" class="col-sm-2 col-form-label" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="col-sm-10"> <input id="{{uniqueId}}" class="form-control" name="{{buildName}}" type="number" step="any" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div> </div>'));
builder.addVariant("select", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group row"> <label for="{{uniqueId}}" class="col-sm-2 col-form-label" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="col-sm-10"> <select id="{{uniqueId}}" class="form-control" name="{{buildName}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"></select> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div> </div>'));
builder.addVariant("multiselect", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group row"> <label for="{{uniqueId}}" class="col-sm-2 col-form-label" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="col-sm-10"> <select id="{{uniqueId}}" class="form-control" name="{{buildName}}" multiple="" size="{{size}}" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"></select> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div> </div>'));
builder.addVariant("arrayEditor", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group row"> <label class="col-sm-2" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="col-sm-10"> <div class="{{buildName}} card" data-hr-toggle="{{buildName}}Error" data-hr-class-on="border-danger"> <div class="card-body pt-1 pb-1 pl-2 pr-2"> <div data-hr-view="items" data-hr-view-component="hr.forms.horizontal-arrayEditorItem"></div> <button type="button" class="btn btn-default" data-hr-on-click="add">Add</button> </div> </div> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div> </div>'));
builder.addVariant("objectEditor", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group"> <label data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="{{buildName}} card" data-hr-toggle="{{buildName}}Error" data-hr-class-on="border-danger"> <div class="card-body"> <div data-hr-view="items" data-hr-view-component="hr.forms.horizontal-objectEditorItem"></div> </div> </div> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div>'));
builder.addVariant("multicheckbox", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group row"> <label class="col-sm-2" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="col-sm-10"> <div class="{{buildName}} card" data-hr-toggle="{{buildName}}Error" data-hr-class-on="border-danger"> <div class="card-body pt-1 pb-1 pl-2 pr-2"> {{if xUi.selectAll}} <div class="p0"> <div class="form-check"><input type="checkbox" class="form-check-input" id="{{uniqueId}}-hr-multicheck-selectall" value="true" data-hr-on-click="selectAll" data-hr-handle="selectAll"><label class="form-check-label" for="{{uniqueId}}-hr-multicheck-selectall">Select All</label></div> </div> {{/if}} <div class="p0" data-hr-view="items" data-hr-view-component="hr.forms.horizontal-multicheckboxitem"></div> </div> </div> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> <div class="clearfix"></div> </div> </div>'));
builder.addVariant("radiobutton", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group row"> <label class="col-sm-2" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="col-sm-10"> <div class="{{buildName}} card" data-hr-toggle="{{buildName}}Error" data-hr-class-on="border-danger"> <div class="card-body pt-1 pb-1 pl-2 pr-2" data-hr-view="items" data-hr-view-component="hr.forms.horizontal-radiobutton"></div> </div> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div> </div>'));
builder.addVariant("search", new VariantBuilder('<div class="{{formItemClass}}" data-hr-toggle="{{buildName}}Hide" data-hr-style-on="display:none;"> <div class="form-group row"> <label for="{{uniqueId}}" class="col-sm-2 col-form-label" data-hr-toggle="{{buildName}}Error" data-hr-class-on="text-danger">{{title}}</label> <div class="col-sm-10" data-hr-on-focusout="stopSearch" data-hr-handle="searchFocusParent"> <input id="{{uniqueId}}" class="form-control" name="{{buildName}}" type="text" data-hr-on-input="updateSearch" data-hr-toggle="{{buildName}}Error" data-hr-class-on="is-invalid"> <div class="dropdown" data-hr-toggle="popup" data-hr-class-on="show"> <div class="dropdown-menu" data-hr-view="results" data-hr-view-component="hr.forms.horizontal-searchResult" data-hr-toggle="popup" data-hr-class-on="show"></div> </div> <div class="invalid-feedback" data-hr-view="{{buildName}}ErrorMessage" data-hr-toggle="{{buildName}}Error" data-hr-class-on="d-block" data-hr-class-off="d-none" data-hr-state="off">{{{this}}}</div> </div> </div> </div>'));
component.register("hr.forms.horizontal", builder);

builder = new ComponentBuilder('<div class="form-check"><input type="checkbox" class="form-check-input" value="{{value}}" data-hr-handle="check" id="{{uniqueId}}"><label class="form-check-label" for="{{uniqueId}}">{{label}}</label></div>');
component.register("hr.forms.horizontal-multicheckboxitem", builder);

builder = new ComponentBuilder('<div class="form-check"><input type="radio" class="form-check-input" id="{{uniqueId}}" name="{{name}}" value="{{value}}" data-hr-handle="radio"><label class="form-check-label" for="{{uniqueId}}">{{label}}</label></div>');
component.register("hr.forms.horizontal-radiobutton", builder);

builder = new ComponentBuilder('<div class="card mb-2"> <div class="card-body"> <button type="button" data-hr-on-click="remove" class="btn btn-default" data-hr-form-end="">Remove</button> </div> </div>');
component.register("hr.forms.horizontal-arrayEditorItem", builder);

builder = new ComponentBuilder('<div></div>');
component.register("hr.forms.horizontal-objectEditorItem", builder);

builder = new ComponentBuilder('<a href="#" class="dropdown-item" data-hr-on-click="selectItem">{{title}}</a>');
builder.addVariant("message", new VariantBuilder('<a class="dropdown-item">{{title}}</a>'));
component.register("hr.forms.horizontal-searchResult", builder);

export function setup() {
    return true; //Does not do anything, but makes module work.
}