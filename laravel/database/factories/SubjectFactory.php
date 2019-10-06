<?php

use Faker\Generator as Faker;
use App\Subject;

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

$factory->define(Subject::class, function (Faker $faker) {
    return [
        'name' => $faker->colorName,
        'short_name' => $faker->domainName,
    ];
});
