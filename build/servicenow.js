module.exports = {
    uri: 'https://[instance].service-now.com',
    application: '[app_sys_id]',
    mapping: 'snsyncmapping.json',
    types: {
        'sys_script': {js: 'script', ts: 'u_typescript'}, 
        'sys_script_include': {js: 'script', ts: 'u_typescript'}
    },
    auth: {
        user: '[USERNAME]',
        pwd: '[PASSWORD]'
    },
    dts: {
        path: 'typings/servicenow.d.ts',
        refs: [
            'index.d.ts'
        ],
        types: [
            'core_company',
        ],
        ignoreFields: [
            'sys_id',
            'sys_created_on',
            'sys_created_by',
            'sys_updated_on',
            'sys_updated_by',
            'sys_mod_count'
        ]
    }
}