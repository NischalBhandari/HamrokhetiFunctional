<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Model;
use Faker\Generator as Faker;

$factory->define(App\Farm::class, function (Faker $faker) {
    return [
        'name'=>$faker->text(50),
        'description'=>$faker->text(200),
        'gains'=>$faker->randomDigit(4),
        'location'=>$faker->text(59),

    ];
});
