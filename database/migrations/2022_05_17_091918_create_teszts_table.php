<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;
use Illuminate\Support\Facades\DB;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('teszts', function (Blueprint $table) {
            $table->id();
            $table->string('kerdes');
            $table->string('v1');
            $table->string('v2');
            $table->string('v3');
            $table->string('v4');
            $table->foreignId('kategorianev')->references('id')->on('kategorias');
            $table->timestamps();
        });

        DB::table('teszts')->insert([
            ['kategorianev'=>1,'kerdes' => "A papírt milyen színű szelektív kukába gyűtjük?",'v1' =>'kék','v2'=> "sárga",'v3'=>'piros','v4'=>'szürke',],
            ['kategorianev'=>1,'kerdes' => "Melyek komposztálhatóak?",'v1' =>'zöldség','v2'=> "nagy ágak",'v3'=>'fém','v4'=>'ruhanemü',],
        ]);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('teszts');
    }
};
