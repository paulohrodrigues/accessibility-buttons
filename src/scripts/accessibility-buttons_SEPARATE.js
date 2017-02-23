/**
 * accessibilityButtons
 * @param  {object} options Options to execute the lib
 */

/* exported accessibilityButtons */
const accessibilityButtons = userOptions => {
    'use strict';

    /**
     * hasClass
     * @param  {string}  element - DOM element
     * @param  {string}  clazz   - Class Name
     * @return {Boolean}
     */
    // const hasClass = (element, clazz) => {
    //     return (` ${element.className} `).indexOf(` ${clazz} `) > -1;
    // };
    //
    const fontOptions = userOptions && userOptions.font;
    const fontOptionsSteps = userOptions.font && userOptions.font.steps;
    const contrastOptions = userOptions && userOptions.contrast;


    const settings = {
        font: {
            nameButtonIncrease: (fontOptions && fontOptions.nameButtonIncrease) || '+A',
            ariaLabelButtonIncrease: (fontOptions && fontOptions.ariaLabelButtonIncrease) || 'Increase Font',
            nameButtonDecrease: (fontOptions && fontOptions.nameButtonDecrease) || '-A',
            ariaLabelButtonDecrease: (fontOptions && fontOptions.ariaLabelButtonDecrease) || 'Decrease Font',
            steps: {
                enable: fontOptionsSteps && !!fontOptions.steps.enable,
                increase: (fontOptionsSteps && fontOptions.steps.increase) || 2,
                decrease: (fontOptionsSteps && fontOptions.steps.decrease) || 2
            }
        },

        contrast: {
            nameButtonAdd: (contrastOptions && contrastOptions.nameButtonAdd) || 'Add Contrast',
            ariaLabelButtonAdd: (contrastOptions && contrastOptions.ariaLabelButtonAdd) || 'Add Contrast',
            nameButtonRemove: (contrastOptions && contrastOptions.nameButtonRemove) || 'Remove Contrast',
            ariaLabelButtonRemove: (contrastOptions && contrastOptions.ariaLabelButtonRemove) || 'Remove Contrast'
        }
    };

    // Set buttons name and aria label
    // if (options) {
    //     for (var key in options) {
    //         if (options.hasOwnProperty(key)) {
    //             var obj = options[key];

    //             for (var prop in obj) {
    //                 if (obj.hasOwnProperty(prop)) {
    //                     setting[key][prop] = obj[prop];
    //                 }
    //             }
    //         }
    //     }
    // }


    const $accessibilityButtons = document.getElementsByClassName('acessibility-buttons');
    // const $body = document.body;
    // const $fontButton = document.getElementById('accessibility-font');
    // const $contrastButton = document.getElementById('accessibility-contrast');

    //         storageFont = localStorage.accessibility_font,
    //         storageContrast = localStorage.accessibility_contrast;

    // // Check if exist storage and set the correct button names and aria attributes
    // if (!setting.font.steps.enable) {
    //     if (storageFont && $fontButton) {
    //         $body.classList.add('accessibility-font');

    //         $fontButton.innerHTML = setting.font.nameButtonDecrease;
    //         $fontButton.setAttribute('aria-label', setting.font.ariaLabelButtonDecrease);
    //     } else if ($fontButton) {
    //         $fontButton.innerHTML = setting.font.nameButtonIncrease;
    //         $fontButton.setAttribute('aria-label', setting.font.ariaLabelButtonIncrease);
    //     }
    // }

    // if (storageContrast && $contrastButton) {
    //     $body.classList.add('accessibility-contrast');

    //     $contrastButton.innerHTML = setting.contrast.nameButtonRemove;
    //     $contrastButton.setAttribute('aria-label', setting.contrast.ariaLabelButtonRemove);
    // } else if ($contrastButton) {
    //     $contrastButton.innerHTML = setting.contrast.nameButtonAdd;
    //     $contrastButton.setAttribute('aria-label', setting.contrast.ariaLabelButtonAdd);
    // }

    /**
     * Get the click event
     * Rename the buttons
     * Apply/Remove Contrast or Font Size
     * Manage storage
     */
    function applyActions() {
        return function() {
            console.log(this);
    //         var context = this;

    //         if (hasClass($body, context.getAttribute('id'))) {
    //             $body.classList.remove(context.getAttribute('id'));

    //             if (context.getAttribute('id') === 'accessibility-font') {
    //                 context.innerHTML = setting.font.nameButtonIncrease;
    //                 context.setAttribute('aria-label', setting.font.ariaLabelButtonIncrease);

    //                 localStorage.removeItem('accessibility_font');
    //             } else {
    //                 context.innerHTML = setting.contrast.nameButtonAdd;
    //                 context.setAttribute('aria-label', setting.contrast.ariaLabelButtonAdd);

    //                 localStorage.removeItem('accessibility_contrast');
    //             }
    //         } else {
    //             $body.classList.add(context.getAttribute('id'));

    //             if (context.getAttribute('id') === 'accessibility-font') {
    //                 if (!storageFont) {
    //                     localStorage.setItem('accessibility_font', true);
    //                 }
    //                 context.innerHTML = setting.font.nameButtonDecrease;
    //                 context.setAttribute('aria-label', setting.font.ariaLabelButtonDecrease);
    //             } else {
    //                 if (!storageContrast) {
    //                     localStorage.setItem('accessibility_contrast', true);
    //                 }
    //                 context.innerHTML = setting.contrast.nameButtonRemove;
    //                 context.setAttribute('aria-label', setting.contrast.ariaLabelButtonRemove);
    //             }
    //         }
        };
    }

    // Listening Click Event
    for (var i = 0; i < $accessibilityButtons.length; i++) {
        $accessibilityButtons[i].addEventListener('click', applyActions());
    }
};
