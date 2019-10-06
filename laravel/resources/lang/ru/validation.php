<?php

return [

    /*
    |--------------------------------------------------------------------------
    | Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | The following language lines contain the default error messages used by
    | the validator class. Some of these rules have multiple versions such
    | as the size rules. Feel free to tweak each of these messages here.
    |
    */

    'exists' => 'Выбранная запись не существует.',
    'min' => [
        'numeric' => 'Поле ":attribute" должно быть не меньше :min.',
        'string' => 'Поле ":attribute" должно быть не меньше :min символов.',
    ],
    'max' => [
        'string' => 'Поле ":attribute" должно быть не более :max символов.',
    ],
    'required' => 'Поле ":attribute" обязательно для заполнения.',
    'unique' => 'Поле ":attribute" должно быть уникально.',


    /*
    |--------------------------------------------------------------------------
    | Custom Validation Language Lines
    |--------------------------------------------------------------------------
    |
    | Here you may specify custom validation messages for attributes using the
    | convention "attribute.rule" to name the lines. This makes it quick to
    | specify a specific custom language line for a given attribute rule.
    |
    */

    'custom' => [
        'name' => [
            'name' => 'Некорректная ":attribute".',
        ],
        'email' => [
            'email' => 'Некорректная ":attribute".',
        ],
        'faculty id' => [
            'exists' => 'Выбранная запись не существует.'
        ]
    ],

    /*
    |--------------------------------------------------------------------------
    | Custom Validation Attributes
    |--------------------------------------------------------------------------
    |
    | The following language lines are used to swap our attribute placeholder
    | with something more reader friendly such as "E-Mail Address" instead
    | of "email". This simply helps us make our message more expressive.
    |
    */

    'attributes' => [
        'email' => "E-mail",
        'name' => 'Название',
        'description' => 'Описание',
    ],

];
