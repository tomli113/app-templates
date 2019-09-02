(function(){
    //-------------------------------------------------------------------------------------
    var modules={
        "tom-control-panel":            {url:"$H/m/control-panel.html"},
        "tom-knowledge-base-data":    	{url":"$A/modules/t/tom-knowledge-base-data.html",Table:"tom-knowledge-base",form_module:"tom-knowledge-base-form",router:1},
        "tom-knowledge-base-form":    	{url":"$A/modules/t/tom-knowledge-base-form.html",Table:"tom-knowledge-base"},
        "contact-details-data":    			{"url":"$A/modules/c/contact-details-data.html","Table":"contact-details","form_module":"contact-details-form","router":1},
        "contact-details-form":    			{"url":"$A/modules/c/contact-details-form.html","Table":"contact-details"},

        "module-editor":        {url:"https://vm.vmiis.com/component/m/module-editor.html",router:1},
    }
    for(p in modules){
        $vm.module_list[p]=modules[p];
        $vm.module_list[p].url=$vm.module_list[p].url.replace('$H',$vm.hosting_path);
    }
    //-------------------------------------------------------------------------------------
})();
