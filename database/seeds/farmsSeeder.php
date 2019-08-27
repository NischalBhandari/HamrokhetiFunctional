<?php

use Illuminate\Database\Seeder;

class farmsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {

        factory(App\Farm::class,30)->create();
    }
}
