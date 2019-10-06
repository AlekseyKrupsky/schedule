<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use App\Http\Requests\Traits\UsesCustomErrorMessage;

class StoreGroup extends FormRequest
{
    use UsesCustomErrorMessage;

    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'name' => 'required|string|min:2|max:255|unique:groups',
            'faculty_id' => 'required|integer|exists:faculties,id',
            'stream_id' => 'required|integer|exists:streams,id',
        ];
    }
}
