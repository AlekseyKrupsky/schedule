<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

/**
 * Class Subject.
 *
 * @package App
 * @property string name
 */
class Subject extends Model
{
    /**
     * The table associated with the subjects.
     *
     * @var string
     */
    protected $table = 'subjects';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id',
        'name',
        'short_name'
    ];

    /**
     * Indicates if the model should be timestamped.
     *
     * @var boolean
     */
    public $timestamps = false;
}
