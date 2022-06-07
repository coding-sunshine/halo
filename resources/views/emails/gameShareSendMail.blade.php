@component('mail::message')
# Introduction

Hi, {{ $detail['name'] }}. <br>
{{ $detail['company_name'] }}, <br>
{{ $detail['email'] }}. <br>

Congratulations.

Thanks,<br>
{{ config('app.name') }}
@endcomponent
