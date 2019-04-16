var main_data = {
    "sum": [
        {
            "name": "total",
            "number": 4
        },
        {
            "name": "db",
            "number": 4,
            "detail": {
                ".calculationview": 4
            }
        }
    ],
    "errors": {
        "number": 0,
        "list": []
    },
    "warnings": {
        "number": 1,
        "list": [
            {
                "type": "WARNING",
                "message": [
                    "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                ],
                "category": "SECURITY",
                "id": "SECURITY_1",
                "file": ""
            }
        ]
    },
    "infos": {
        "number": 0,
        "list": []
    },
    "steps": [
        {
            "priority": 4,
            "always-shown": true,
            "name": "Migration of Security Concept Required",
            "desc": "The security concept has changed with XS Advanced and is incompatible with XS Classic. Manual migration steps are required in order to complete the migration of this application to XS Advanced. <br>For information about the XS Advanced security concept read the XS Advanced Migration Guide.",
            "link": {
                "info": "description",
                "url": "undefined#security"
            },
            "messages": {
                "WARNING": [
                    {
                        "type": "WARNING",
                        "message": [
                            "Application does not have any role or privileges defined. Therefore we could not generate xs-security.json and default_access_role.hdbrole for you."
                        ],
                        "category": "SECURITY",
                        "id": "SECURITY_1",
                        "file": ""
                    }
                ]
            },
            "list": [
                {
                    "text": "WARNING",
                    "value": 1
                }
            ]
        }
    ],
    "task": {
        "dus": [],
        "packages": [
            "sap.hba.ecc.reporting"
        ]
    },
    "project": {
        "name": "sap_hba_ecc_reporting",
        "vendor": "No-vendor",
        "version": "0",
        "description": ""
    },
    "cmdline": "--h \"false\" --help \"false\" --generate-manifests \"false\" --zip \"true\" --hta \"false\" --generate-providers \"false\" --unhide-hidden-columns \"false\" --generate-local-slash-synonyms \"false\" --integrated-synonymtargets \"false\" --packages \"sap.hba.ecc.reporting\" --synonym-target-provider \"synonym_providers\\synonym-provider-service.json\"",
    "isoTime": "2019-04-15T19:25:56.053Z",
    "mig-tool-version": "1.1.27",
    "system": {
        "host": "ec2-54-158-20-168.compute-1.amazonaws.com",
        "port": "30015",
        "user": "MIGRATION",
        "sid": "HXE",
        "hana_version": "2.00.033.00.1535711040"
    }
};