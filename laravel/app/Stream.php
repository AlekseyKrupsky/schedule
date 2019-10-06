<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Stream.
 *
 * @package App
 * @property string name
 */
class Stream extends Model
{
    /**
     * The table associated with the teachers.
     *
     * @var string
     */
    protected $table = 'streams';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var boolean
     */
    public $timestamps = false;
}
