<?php

use Illuminate\Support\Str;
use Faker\Generator as Faker;
use App\Lesson;

/*
|--------------------------------------------------------------------------
| Model Factories
|--------------------------------------------------------------------------
|
| This directory should contain each of the model factory definitions for
| your application. Factories provide a convenient way to generate new
| model instances for testing / seeding your application's database.
|
*/

$factory->define(Lesson::class, function (Faker $faker) {
    return [
        'group_id' => 1,
        'subgroup_1' => 1,
        'subgroup_2' => 1,
        'day_num' => 1,
        'order' => 1,
        'room' => 222,
        'subject_id' => 1,
        'teacher_id' => 1,
    ];
});
