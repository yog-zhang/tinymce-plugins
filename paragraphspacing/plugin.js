tinymce.PluginManager.add('paragraphspacing', function(editor, url) {
  const pluginName = '段落间距';
  const paragraphspacing = editor.getParam('paragraphspacing', '0px 3px 5px 10px 15px 20px 30px 50px');
  editor.on('init', function() {
    editor.formatter.register({
        paragraphspacing: {
            block: 'p',
            toggle: true,
            styles: { 'margin': '%value 0' },
            clear_child_styles: true
        }
    });
  });
  const doAct = function (value) {
      editor.undoManager.transact(function(){
        editor.focus();
        editor.formatter.apply('paragraphspacing', { value: value });
    })
  };

  editor.ui.registry.getAll().icons.paragraphspacing || editor.ui.registry.addIcon('paragraphspacing','<svg t="1647919461329" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="882" width="24" height="24"> <g fill="#ffffff" stroke="#ffffff" stroke-width="28"><path d="M844.8 354.56H460.8a25.6 25.6 0 0 1 0-51.2h384a25.6 25.6 0 0 1 0 51.2zM682.496 505.088H460.8a25.6 25.6 0 0 1 0-51.2h220.672a25.6 25.6 0 0 1 0 51.2zM844.8 655.872H460.8a25.6 25.6 0 0 1 0-51.2h384a25.6 25.6 0 0 1 0 51.2zM682.496 806.4H460.8a25.6 25.6 0 0 1 0-51.2h220.672a25.6 25.6 0 0 1 0 51.2zM260.352 467.712a107.776 107.776 0 1 1 107.776-107.776 108.032 108.032 0 0 1-107.776 107.776z m0-164.352a56.576 56.576 0 1 0 56.576 56.576 56.576 56.576 0 0 0-56.576-56.576zM260.352 773.632A107.776 107.776 0 1 1 368.128 665.6a108.032 108.032 0 0 1-107.776 108.032z m0-164.352a56.576 56.576 0 1 0 56.576 56.32 56.832 56.832 0 0 0-56.576-56.32z" p-id="883"></path><path d="M260.352 303.36a25.6 25.6 0 0 1-25.6-25.6V166.4a25.6 25.6 0 0 1 51.2 0v111.36a25.6 25.6 0 0 1-25.6 25.6zM260.352 883.2a25.6 25.6 0 0 1-25.6-25.6v-111.36a25.6 25.6 0 0 1 51.2 0v111.36a25.6 25.6 0 0 1-25.6 25.6zM260.352 609.28a25.6 25.6 0 0 1-25.6-25.6v-141.568a25.6 25.6 0 0 1 51.2 0v141.568a25.6 25.6 0 0 1-25.6 25.6z" p-id="884"></path></g></svg>');
  let selectedItem = ''
  editor.ui.registry.addMenuButton('paragraphspacing', {
    icon: 'paragraphspacing',
    // text: '段落间距',
    tooltip: pluginName,
    fetch: function(callback) {
        let items = paragraphspacing.split(' ').map(function(item){
            return {
                type: 'togglemenuitem',
                text: item,
                onAction: function() {
                    selectedItem = item
                    doAct(item);
                },
                onSetup: function(api) {
                    if(selectedItem === item) {
                        api.setActive(true)
                    } else {
                        api.setActive(false)
                    }
                }
            };
        });
        callback(items);
    },
    onSetup: function(api) {
        selectedItem = paragraphspacing.split(' ')[0]
    }
  });

  editor.ui.registry.addNestedMenuItem('paragraphspacing', {
    text: pluginName,
    value: selectedItem,
    getSubmenuItems: function() {
        return paragraphspacing.split(' ').map(function(item){
            return {
                type: 'menuitem',
                text: item,
                onAction: function() {
                    selectedItem = item
                    doAct(item);
                },
                onSetup: function(api) {
                    if(selectedItem === item) {
                        api.setDisabled(true)
                    } else {
                        api.setDisabled(false)
                    }
                }
            };
        });
    }
  });
  
  return {
      getMetadata: function () {
          return  {
              name: pluginName,
              url: "https://github.com/yog-zhang/tinymce-plugins.git",
          };
      }
  };
});
