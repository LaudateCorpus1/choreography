﻿class ChoreographyUi {
    constructor(schema) {
        this.schema = schema;
        this.icon = "data:image/png;base64,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IVaSFOJz4nGDLkj8yHXZ5TfORYcFnhkyMql54hCxWOxguYNZyVCJp4nDiqpRvpB1WeG8xVmt1FjrnvyFwby2kuY6zRHEsYQEkhAho4YyKrAQoVUjxUSK9mMe/mHHnySXTK4yGDkWUIUKyfGD/8Hvbs3C1KSbFIwB3S+2/TEKBHaBZt22v49tu3kC+J+BK63trzaAuU/S620tfAQMbAMX121N3gMud4ChJ10yJEfy0xQKBeD9jL4pBwzeAr1rbm+tfZw+ABnqavkGODgExoqUve7x7p7O3v490+rvB70tcsV2ojX4AAAPnGlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNC40LjAtRXhpdjIiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgeG1sbnM6aXB0Y0V4dD0iaHR0cDovL2lwdGMub3JnL3N0ZC9JcHRjNHhtcEV4dC8yMDA4LTAyLTI5LyIKICAgIHhtbG5zOnhtcE1NPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvbW0vIgogICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgIHhtbG5zOnBsdXM9Imh0dHA6Ly9ucy51c2VwbHVzLm9yZy9sZGYveG1wLzEuMC8iCiAgICB4bWxuczpHSU1QPSJodHRwOi8vd3d3LmdpbXAub3JnL3htcC8iCiAgICB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iCiAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyIKICAgIHhtbG5zOnhtcD0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wLyIKICAgeG1wTU06RG9jdW1lbnRJRD0iZ2ltcDpkb2NpZDpnaW1wOmEyOTIyZDI3LTlkOTYtNGJkMy05YjIxLTAxODMwYTVkZTQxNSIKICAgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDplNmFkZjcyZC03MGNmLTQyYmEtOWJiZS0xNWY2ODM0MDkzNjUiCiAgIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpjYjE4NGY4YS01YzQ2LTQ0MmMtOGVmZi1iMWIzMGQyMTJlNWMiCiAgIEdJTVA6QVBJPSIyLjAiCiAgIEdJTVA6UGxhdGZvcm09IldpbmRvd3MiCiAgIEdJTVA6VGltZVN0YW1wPSIxNjE1MTI5MjIzNzg1NTc4IgogICBHSU1QOlZlcnNpb249IjIuMTAuMjIiCiAgIGRjOkZvcm1hdD0iaW1hZ2UvcG5nIgogICB0aWZmOk9yaWVudGF0aW9uPSIxIgogICB4bXA6Q3JlYXRvclRvb2w9IkdJTVAgMi4xMCI+CiAgIDxpcHRjRXh0OkxvY2F0aW9uQ3JlYXRlZD4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OkxvY2F0aW9uQ3JlYXRlZD4KICAgPGlwdGNFeHQ6TG9jYXRpb25TaG93bj4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OkxvY2F0aW9uU2hvd24+CiAgIDxpcHRjRXh0OkFydHdvcmtPck9iamVjdD4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OkFydHdvcmtPck9iamVjdD4KICAgPGlwdGNFeHQ6UmVnaXN0cnlJZD4KICAgIDxyZGY6QmFnLz4KICAgPC9pcHRjRXh0OlJlZ2lzdHJ5SWQ+CiAgIDx4bXBNTTpIaXN0b3J5PgogICAgPHJkZjpTZXE+CiAgICAgPHJkZjpsaQogICAgICBzdEV2dDphY3Rpb249InNhdmVkIgogICAgICBzdEV2dDpjaGFuZ2VkPSIvIgogICAgICBzdEV2dDppbnN0YW5jZUlEPSJ4bXAuaWlkOjRlNzJkNzc2LTg4NzMtNDljYi04ZjFiLWU0M2M4YzM3Yjc2YiIKICAgICAgc3RFdnQ6c29mdHdhcmVBZ2VudD0iR2ltcCAyLjEwIChXaW5kb3dzKSIKICAgICAgc3RFdnQ6d2hlbj0iMjAyMS0wMy0wN1QxNjowMDoyMyIvPgogICAgPC9yZGY6U2VxPgogICA8L3htcE1NOkhpc3Rvcnk+CiAgIDxwbHVzOkltYWdlU3VwcGxpZXI+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZVN1cHBsaWVyPgogICA8cGx1czpJbWFnZUNyZWF0b3I+CiAgICA8cmRmOlNlcS8+CiAgIDwvcGx1czpJbWFnZUNyZWF0b3I+CiAgIDxwbHVzOkNvcHlyaWdodE93bmVyPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6Q29weXJpZ2h0T3duZXI+CiAgIDxwbHVzOkxpY2Vuc29yPgogICAgPHJkZjpTZXEvPgogICA8L3BsdXM6TGljZW5zb3I+CiAgPC9yZGY6RGVzY3JpcHRpb24+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgCjw/eHBhY2tldCBlbmQ9InciPz4RMiUYAAAABmJLR0QA/wD/AP+gvaeTAAAACXBIWXMAAC4jAAAuIwF4pT92AAAAB3RJTUUH5QMHDwAX2KWgAgAAABl0RVh0Q29tbWVudABDcmVhdGVkIHdpdGggR0lNUFeBDhcAAASsSURBVFjDvZdNb9NKFIYfO3bdmDoNSRUSSCitoGJDAYFAcAUSsAQEO1Ys2fAruuRXsIUfcBcIIbGgBSG6ihKqIjUBiZBWOM2Hncbxx8zd0AhQW0qb3ln5Y+zzzMw7Z84LgJTyppRyXkrpywNoQggphNi89X/Eugmg/Lj4F4gzxCalpNPpUK/X6fV6tNttrl27RiwW2+zSA+4oUsp54J9hBu52u9RqNcIwJB6Ps7q6ytmzZzl06NDv3RcUKaUP6PsNHEURjuNg2zZCCBRFwXVdhBCcOHGCdDq91WeBtp/gm6N1HAfHcVAUBc/zqNVq1Ot1pqensSyLw4cPb/cLXZFSyr2MttPp4DgOQghUVcX3fRqNBtVqlVwuRzabRdd1jh8/jqZp2/5r1wBCCBqNBkEQIITANM3BNDcaDb58+UIYhty4cYNUKrXrwewKQErJ2traIGgURYPglUqFlZUVTp48yaVLlxgZGfmr2dwVwPr6OgCaptFoNFhaWsL3fTY2Nkin01y5coVEIrEnHWl/6rC5zoZh0Ov1WFtbo9PpcP/+fXRd/3lfDx8gDEM8z8MwDDzPG6jdsiwMw0BRlH3nDXWnl81mE8uy8H0fIQSO4+C6LvF4fCjBdwQIggBVVVEUhVgshhAC13WxbRvTNIeWstWd1t6yLIQQ6LpOEAQ0m01c12VmZubgAYQQaJqGrutIKfE8DyEE2WyW8fHxgweQUqIoCoqiEAQBGxsbRFFEFEXsIXn+HcDmYfKz0DzPY3V1lbdv3+K67sECtNttpJQEQUC326VarfLq1SuePXuGruuMjo4ODWDLTFir1XAch3q9zvz8PB8+fCCZTPLw4UNmZmaYnJwcGsC2icg0TRzH4dOnTzSbTe7du8etW7dQVXWYhdPWAIZhIITA8zzCMKRQKPD69WsMw+D27duMj48PDWTLJeh0OrRaLT5//kypVELXdZaXlymVSly8eJEzZ84wMTFBPp8nn89vVWrtT4SWZRFFEaqqksvlMAyDVCrF1atXyWQyrK+vY5omi4uLPHnyhJWVlT1vzW2PY9u2WVhY4OvXr+i6jud5aJqGqqoUi0UMwyCfz9NqtahWqzx+/JgLFy5gGMZfAcTm5ubmthOhZVl8//6dVqtFpVJB13U+fvxIv9/n6NGjXL58mX6/z9LSEsvLy7Tb7cHstNtt6vU66XR6x4NrWwCARCLB6dOnOXbsGKlUitnZWbrdLgsLC/i+z+zsLFEUUalU+PbtG1NTU7x584bnz59jWRYvXrwgk8mQzWYHtaTrusRisYGId10ThmGI67r4vk8URYyNjWHbNuVymZcvX1Iul3nw4AGLi4sUi0Wy2SyPHj1CCMHY2Bi9Xo9Wq0U6nebUqVNMT0/vriIa7FdNI5lM/vIsHo9TLpdJJpOMjIxQKpXo9/v0ej1s2+bdu3eDQjWTyTA1NYVhGORyuV/yQLBXb6BpGufOneP9+/dMTExQLBYpFApYlsWRI0dIJpPcvXuXQqGArutomva7HoKhWLNiscjTp09xXRfTNDl//jzXr19ncnJyR0+wac2GYk5t2yYMQ0ZHR0kkErvJlD3gDv+HPf+t/WLP/wO4jzaN6oF/ogAAAABJRU5ErkJggg=="
    }
    show() {
        let image = document.getElementById('choreography-ui-icon');
        image.src = this.icon;

        let fav = document.querySelector("link[rel = 'icon']");
        fav.href = this.icon;

        let container = document.getElementById('choreography-ui');
        container.classList.add("accordion");

        for (let i = 0; i < this.schema.length; i++) {
            let type = this.schema[i];
            let show = i == 0 ? 'show' : '';
            let template = `<div class="card">
                            <div class="card-header" id="h-${type.name}">
                                <h2 class="mb-0">
                                    <button class="btn btn-outline-info btn-block text-left" type="button" data-toggle="collapse" data-target="#collapse-${type.name}" aria-expanded="true" aria-controls="collapseOne">
                                        <span class="badge badge-success">Produce</span> ${type.name}
                                    </button>
                                </h2>
                            </div>

                            <div id="collapse-${type.name}" class="collapse ${show}" aria-labelledby="h-${type.name}" data-parent="#choreography-ui">
                                <div class="card-body">
                                    <pre id="json-${type.name}">${JSON.stringify(type.object, null, 2)}</pre>
                                </div>
                            </div>
                        </div>`;
            container.insertAdjacentHTML('beforeend', template);
        }
    }
}
