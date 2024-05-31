// pf2e.js
LoadLoopPF2E();

function LoadLoopPF2E() {
    processPF2EChecks();
    processPF2EGeneralText();

    setTimeout(LoadLoopPF2E, 1500); // 1.5 seconds
}

function processPF2EChecks() {
    $('#container-row-0 .dice-switch:not(.TSExtensionAttacksModified)').each(function () {
        let bonusText = $(this).text();
        let label = 'Pathbuilder 2e';

        $(this).html(linkGenerator(bonusText, true, '', label));
        $(this).addClass('TSExtensionAttacksModified');
    });
}

function processPF2EGeneralText() {
    let label = 'Pathbuilder 2e';

    $('div:not(.TSExtensionAttacksModified)').each(function () {
        let textHTML = $(this).html().replace(REGEX_DAMAGE, function (match, startSpace, diceText, diceNum, diceType, bonus, bonusLast, afterWord, afterWordOnly, endSpace) {
            return startSpace + linkGenerator(match.substring(startSpace.length), false, '', label);
        });
        if (textHTML != $(this).html()) {
            $(this).html(textHTML);
        }
        $(this).addClass('TSExtensionAttacksModified');
    });

    $('span:not(.TSExtensionAttacksModified)').each(function () {
        let textHTML = $(this).html().replace(REGEX_DAMAGE, function (match, startSpace, diceText, diceNum, diceType, bonus, bonusLast, afterWord, afterWordOnly, endSpace) {
            return startSpace + linkGenerator(match.substring(startSpace.length), false, '', label);
        });
        if (textHTML != $(this).html()) {
            $(this).html(textHTML);
        }
        $(this).addClass('TSExtensionAttacksModified');
    });

    $('p:not(.TSExtensionAttacksModified)').each(function () {
        let textHTML = $(this).html().replace(REGEX_DAMAGE, function (match, startSpace, diceText, diceNum, diceType, bonus, bonusLast, afterWord, afterWordOnly, endSpace) {
            return startSpace + linkGenerator(match.substring(startSpace.length), false, '', label);
        });
        if (textHTML != $(this).html()) {
            $(this).html(textHTML);
        }
        $(this).addClass('TSExtensionAttacksModified');
    });
}
