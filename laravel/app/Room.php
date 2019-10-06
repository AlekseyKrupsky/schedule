<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Room.
 *
 * @package App
 * @property string name
 */
class Room extends Model
{
    /**
     * The table associated with the teachers.
     *
     * @var string
     */
    protected $table = 'rooms';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'location',
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var boolean
     */
    public $timestamps = false;
}
