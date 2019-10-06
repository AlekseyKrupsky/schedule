<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Faculty.
 *
 * @package App
 * @property string name
 */
class Faculty extends Model
{
    /**
     * The table associated with the roles.
     *
     * @var string
     */
    protected $table = 'faculties';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'name',
        'short_name',
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var boolean
     */
    public $timestamps = false;
}
