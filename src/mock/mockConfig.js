export default [
  {
    "title": "记账凭证",
    "backgroundImage": "https://pbu-public.oss-cn-beijing.aliyuncs.com/webapps/pbu_document/DJY0066/background/DJY0066.png",
    "width": 1200,
    "height": 600,
    "style": {
        margin: "0 auto",
        position: "relative"
    },
    "docId": "",
    "version": "1",
    "page": "1",
    "elements": [
      {
        "name": "year",
        "type": "INPUT",
        "elmtype": "NORMAL",
        "pos": {
          "left": 460,
          "top": 91,
          "width": 50,
          "height": 15
        },
        "style": {
            position: "absolute"
        },
        "constraint": {
          "inputType": "NUMBER",
          "maxValue": 999999,
          "minValue": 0,
        }
      },
      {
        "name": "summary_1_1",
        "type": "INPUT",
        "elmtype": "TABLE",
        "table": {
            "row": 1,
            "col": 1
        },
        "pos": {
          "left": 25,
          "top": 178,
          "width": 185,
          "height": 40
        },
        "style": {
            position: "absolute"
        },
        "constraint": {
          "inputType": "NUMBER",
          "maxValue": 999999,
          "minValue": 0,
        }
      },
      {
        "name": "account_1_2",
        "type": "SELECT",
        "elmtype": "TABLE",
        "table": {
            "row": 1,
            "col": 2
        },
        "pos": {
          "left": 215,
          "top": 178,
          "width": 170,
          "height": 40
        },
        "style": {
            position: "absolute"
        },
        "constraint": {
          "inputType": "NUMBER",
          "maxValue": 999999,
          "minValue": 0,
        }
      },
      {
        "name": "checkmark_1_6",
        "type": "CHECK_BOX",
        "elmtype": "TABLE",
        "table": {
          "row": 1,
          "col": 1
        },
        "pos": {
          "left": 1133,
          "top": 190,
          "width": 19,
          "height": 19
        },
        "style": {
            position: "absolute"
        }
      }
    ]
  }
]
