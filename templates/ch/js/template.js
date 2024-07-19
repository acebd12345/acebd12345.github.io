/**
 * @package     Joomla.Site
 * @subpackage  Templates.protostar
 * @copyright   Copyright (C) 2005 - 2013 Open Source Matters, Inc. All rights reserved.
 * @license     GNU General Public License version 2 or later; see LICENSE.txt
 * @since       3.2
 */

(function($)
{
	$(document).ready(function()
	{
		$('*[rel=tooltip]').tooltip()

		// Turn radios into btn-group
		$('.radio.btn-group label').addClass('btn');
		$(".btn-group label:not(.active)").click(function()
		{
			var label = $(this);
			var input = $('#' + label.attr('for'));

			if (!input.prop('checked')) {
				label.closest('.btn-group').find("label").removeClass('active btn-success btn-danger btn-primary');
				if (input.val() == '') {
					label.addClass('active btn-primary');
				} else if (input.val() == 0) {
					label.addClass('active btn-danger');
				} else {
					label.addClass('active btn-success');
				}
				input.prop('checked', true);
			}
		});
		$(".btn-group input[checked=checked]").each(function()
		{
			if ($(this).val() == '') {
				$("label[for=" + $(this).attr('id') + "]").addClass('active btn-primary');
			} else if ($(this).val() == 0) {
				$("label[for=" + $(this).attr('id') + "]").addClass('active btn-danger');
			} else {
				$("label[for=" + $(this).attr('id') + "]").addClass('active btn-success');
			}
		});
	})
})(jQuery);


// check id number (with foreign)
function checkIdNumber(id) {
    var city = new Array(1, 10, 19, 28, 37, 46, 55, 64, 39, 73, 82, 2, 11, 20, 48, 29, 38, 47, 56, 65, 74, 83, 21, 3, 12, 30);
    id = id.toUpperCase();
    
    // Regular expression
    if (!id.match(/^[A-Z]\d{9}$/) && !id.match(/^[A-Z][A-D]\d{8}$/)) {
        return false;
    } else {
        var total = 0;
        if (id.match(/^[A-Z]\d{9}$/)) { // idnum
            id = id.split('');
            
            total = city[id[0].charCodeAt(0) - 65];
            for (var i = 1; i <= 8; i++) {
                total += eval(id[i]) * (9 - i);
            }
        } else { // foreign
            
            id = id.split('');
            total = city[id[0].charCodeAt(0) - 65];
            
            id[1] = id[1].charCodeAt(0) - 65;
            for (var i = 1; i <= 8; i++) {
                total += eval(id[i]) * (9 - i);
            }
        }
        
        total += eval(id[9]);
        
        if (total % 10 == 0) {
            return true;
        } else {
            return false;
        }
        
        
    }
}
