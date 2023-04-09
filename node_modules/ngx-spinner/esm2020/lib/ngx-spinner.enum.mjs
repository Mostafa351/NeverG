export const LOADERS = {
    "ball-8bits": 16,
    "ball-atom": 4,
    "ball-beat": 3,
    "ball-circus": 5,
    "ball-climbing-dot": 4,
    "ball-clip-rotate": 1,
    "ball-clip-rotate-multiple": 2,
    "ball-clip-rotate-pulse": 2,
    "ball-elastic-dots": 5,
    "ball-fall": 3,
    "ball-fussion": 4,
    "ball-grid-beat": 9,
    "ball-grid-pulse": 9,
    "ball-newton-cradle": 4,
    "ball-pulse": 3,
    "ball-pulse-rise": 5,
    "ball-pulse-sync": 3,
    "ball-rotate": 1,
    "ball-running-dots": 5,
    "ball-scale": 1,
    "ball-scale-multiple": 3,
    "ball-scale-pulse": 2,
    "ball-scale-ripple": 1,
    "ball-scale-ripple-multiple": 3,
    "ball-spin": 8,
    "ball-spin-clockwise": 8,
    "ball-spin-clockwise-fade": 8,
    "ball-spin-clockwise-fade-rotating": 8,
    "ball-spin-fade": 8,
    "ball-spin-fade-rotating": 8,
    "ball-spin-rotate": 2,
    "ball-square-clockwise-spin": 8,
    "ball-square-spin": 8,
    "ball-triangle-path": 3,
    "ball-zig-zag": 2,
    "ball-zig-zag-deflect": 2,
    cog: 1,
    "cube-transition": 2,
    fire: 3,
    "line-scale": 5,
    "line-scale-party": 5,
    "line-scale-pulse-out": 5,
    "line-scale-pulse-out-rapid": 5,
    "line-spin-clockwise-fade": 8,
    "line-spin-clockwise-fade-rotating": 8,
    "line-spin-fade": 8,
    "line-spin-fade-rotating": 8,
    pacman: 6,
    "square-jelly-box": 2,
    "square-loader": 1,
    "square-spin": 1,
    timer: 1,
    "triangle-skew-spin": 1,
};
export const DEFAULTS = {
    BD_COLOR: "rgba(51,51,51,0.8)",
    SPINNER_COLOR: "#fff",
    Z_INDEX: 99999,
};
export const PRIMARY_SPINNER = "primary";
export class NgxSpinner {
    constructor(init) {
        Object.assign(this, init);
    }
    static create(init) {
        if (!init?.template && (init?.type == null || init.type.length === 0)) {
            console.warn(`[ngx-spinner]: Property "type" is missed. Please, provide animation type to <ngx-spinner> component
        and ensure css is added to angular.json file`);
        }
        return new NgxSpinner(init);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LXNwaW5uZXIuZW51bS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1zcGlubmVyL3NyYy9saWIvbmd4LXNwaW5uZXIuZW51bS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxNQUFNLENBQUMsTUFBTSxPQUFPLEdBQUc7SUFDckIsWUFBWSxFQUFFLEVBQUU7SUFDaEIsV0FBVyxFQUFFLENBQUM7SUFDZCxXQUFXLEVBQUUsQ0FBQztJQUNkLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLG1CQUFtQixFQUFFLENBQUM7SUFDdEIsa0JBQWtCLEVBQUUsQ0FBQztJQUNyQiwyQkFBMkIsRUFBRSxDQUFDO0lBQzlCLHdCQUF3QixFQUFFLENBQUM7SUFDM0IsbUJBQW1CLEVBQUUsQ0FBQztJQUN0QixXQUFXLEVBQUUsQ0FBQztJQUNkLGNBQWMsRUFBRSxDQUFDO0lBQ2pCLGdCQUFnQixFQUFFLENBQUM7SUFDbkIsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixvQkFBb0IsRUFBRSxDQUFDO0lBQ3ZCLFlBQVksRUFBRSxDQUFDO0lBQ2YsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQixpQkFBaUIsRUFBRSxDQUFDO0lBQ3BCLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLG1CQUFtQixFQUFFLENBQUM7SUFDdEIsWUFBWSxFQUFFLENBQUM7SUFDZixxQkFBcUIsRUFBRSxDQUFDO0lBQ3hCLGtCQUFrQixFQUFFLENBQUM7SUFDckIsbUJBQW1CLEVBQUUsQ0FBQztJQUN0Qiw0QkFBNEIsRUFBRSxDQUFDO0lBQy9CLFdBQVcsRUFBRSxDQUFDO0lBQ2QscUJBQXFCLEVBQUUsQ0FBQztJQUN4QiwwQkFBMEIsRUFBRSxDQUFDO0lBQzdCLG1DQUFtQyxFQUFFLENBQUM7SUFDdEMsZ0JBQWdCLEVBQUUsQ0FBQztJQUNuQix5QkFBeUIsRUFBRSxDQUFDO0lBQzVCLGtCQUFrQixFQUFFLENBQUM7SUFDckIsNEJBQTRCLEVBQUUsQ0FBQztJQUMvQixrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCLG9CQUFvQixFQUFFLENBQUM7SUFDdkIsY0FBYyxFQUFFLENBQUM7SUFDakIsc0JBQXNCLEVBQUUsQ0FBQztJQUN6QixHQUFHLEVBQUUsQ0FBQztJQUNOLGlCQUFpQixFQUFFLENBQUM7SUFDcEIsSUFBSSxFQUFFLENBQUM7SUFDUCxZQUFZLEVBQUUsQ0FBQztJQUNmLGtCQUFrQixFQUFFLENBQUM7SUFDckIsc0JBQXNCLEVBQUUsQ0FBQztJQUN6Qiw0QkFBNEIsRUFBRSxDQUFDO0lBQy9CLDBCQUEwQixFQUFFLENBQUM7SUFDN0IsbUNBQW1DLEVBQUUsQ0FBQztJQUN0QyxnQkFBZ0IsRUFBRSxDQUFDO0lBQ25CLHlCQUF5QixFQUFFLENBQUM7SUFDNUIsTUFBTSxFQUFFLENBQUM7SUFDVCxrQkFBa0IsRUFBRSxDQUFDO0lBQ3JCLGVBQWUsRUFBRSxDQUFDO0lBQ2xCLGFBQWEsRUFBRSxDQUFDO0lBQ2hCLEtBQUssRUFBRSxDQUFDO0lBQ1Isb0JBQW9CLEVBQUUsQ0FBQztDQUN4QixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sUUFBUSxHQUFHO0lBQ3RCLFFBQVEsRUFBRSxvQkFBb0I7SUFDOUIsYUFBYSxFQUFFLE1BQU07SUFDckIsT0FBTyxFQUFFLEtBQUs7Q0FDZixDQUFDO0FBRUYsTUFBTSxDQUFDLE1BQU0sZUFBZSxHQUFHLFNBQVMsQ0FBQztBQWV6QyxNQUFNLE9BQU8sVUFBVTtJQWVyQixZQUFZLElBQTBCO1FBQ3BDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQTBCO1FBQ3RDLElBQUksQ0FBQyxJQUFJLEVBQUUsUUFBUSxJQUFJLENBQUMsSUFBSSxFQUFFLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7WUFDckUsT0FBTyxDQUFDLElBQUksQ0FBQztxREFDa0MsQ0FBQyxDQUFDO1NBQ2xEO1FBQ0QsT0FBTyxJQUFJLFVBQVUsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUM5QixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgTE9BREVSUyA9IHtcbiAgXCJiYWxsLThiaXRzXCI6IDE2LFxuICBcImJhbGwtYXRvbVwiOiA0LFxuICBcImJhbGwtYmVhdFwiOiAzLFxuICBcImJhbGwtY2lyY3VzXCI6IDUsXG4gIFwiYmFsbC1jbGltYmluZy1kb3RcIjogNCxcbiAgXCJiYWxsLWNsaXAtcm90YXRlXCI6IDEsXG4gIFwiYmFsbC1jbGlwLXJvdGF0ZS1tdWx0aXBsZVwiOiAyLFxuICBcImJhbGwtY2xpcC1yb3RhdGUtcHVsc2VcIjogMixcbiAgXCJiYWxsLWVsYXN0aWMtZG90c1wiOiA1LFxuICBcImJhbGwtZmFsbFwiOiAzLFxuICBcImJhbGwtZnVzc2lvblwiOiA0LFxuICBcImJhbGwtZ3JpZC1iZWF0XCI6IDksXG4gIFwiYmFsbC1ncmlkLXB1bHNlXCI6IDksXG4gIFwiYmFsbC1uZXd0b24tY3JhZGxlXCI6IDQsXG4gIFwiYmFsbC1wdWxzZVwiOiAzLFxuICBcImJhbGwtcHVsc2UtcmlzZVwiOiA1LFxuICBcImJhbGwtcHVsc2Utc3luY1wiOiAzLFxuICBcImJhbGwtcm90YXRlXCI6IDEsXG4gIFwiYmFsbC1ydW5uaW5nLWRvdHNcIjogNSxcbiAgXCJiYWxsLXNjYWxlXCI6IDEsXG4gIFwiYmFsbC1zY2FsZS1tdWx0aXBsZVwiOiAzLFxuICBcImJhbGwtc2NhbGUtcHVsc2VcIjogMixcbiAgXCJiYWxsLXNjYWxlLXJpcHBsZVwiOiAxLFxuICBcImJhbGwtc2NhbGUtcmlwcGxlLW11bHRpcGxlXCI6IDMsXG4gIFwiYmFsbC1zcGluXCI6IDgsXG4gIFwiYmFsbC1zcGluLWNsb2Nrd2lzZVwiOiA4LFxuICBcImJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZVwiOiA4LFxuICBcImJhbGwtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZ1wiOiA4LFxuICBcImJhbGwtc3Bpbi1mYWRlXCI6IDgsXG4gIFwiYmFsbC1zcGluLWZhZGUtcm90YXRpbmdcIjogOCxcbiAgXCJiYWxsLXNwaW4tcm90YXRlXCI6IDIsXG4gIFwiYmFsbC1zcXVhcmUtY2xvY2t3aXNlLXNwaW5cIjogOCxcbiAgXCJiYWxsLXNxdWFyZS1zcGluXCI6IDgsXG4gIFwiYmFsbC10cmlhbmdsZS1wYXRoXCI6IDMsXG4gIFwiYmFsbC16aWctemFnXCI6IDIsXG4gIFwiYmFsbC16aWctemFnLWRlZmxlY3RcIjogMixcbiAgY29nOiAxLFxuICBcImN1YmUtdHJhbnNpdGlvblwiOiAyLFxuICBmaXJlOiAzLFxuICBcImxpbmUtc2NhbGVcIjogNSxcbiAgXCJsaW5lLXNjYWxlLXBhcnR5XCI6IDUsXG4gIFwibGluZS1zY2FsZS1wdWxzZS1vdXRcIjogNSxcbiAgXCJsaW5lLXNjYWxlLXB1bHNlLW91dC1yYXBpZFwiOiA1LFxuICBcImxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZVwiOiA4LFxuICBcImxpbmUtc3Bpbi1jbG9ja3dpc2UtZmFkZS1yb3RhdGluZ1wiOiA4LFxuICBcImxpbmUtc3Bpbi1mYWRlXCI6IDgsXG4gIFwibGluZS1zcGluLWZhZGUtcm90YXRpbmdcIjogOCxcbiAgcGFjbWFuOiA2LFxuICBcInNxdWFyZS1qZWxseS1ib3hcIjogMixcbiAgXCJzcXVhcmUtbG9hZGVyXCI6IDEsXG4gIFwic3F1YXJlLXNwaW5cIjogMSxcbiAgdGltZXI6IDEsXG4gIFwidHJpYW5nbGUtc2tldy1zcGluXCI6IDEsXG59O1xuXG5leHBvcnQgY29uc3QgREVGQVVMVFMgPSB7XG4gIEJEX0NPTE9SOiBcInJnYmEoNTEsNTEsNTEsMC44KVwiLFxuICBTUElOTkVSX0NPTE9SOiBcIiNmZmZcIixcbiAgWl9JTkRFWDogOTk5OTksXG59O1xuXG5leHBvcnQgY29uc3QgUFJJTUFSWV9TUElOTkVSID0gXCJwcmltYXJ5XCI7XG5cbmV4cG9ydCB0eXBlIFNpemUgPSBcImRlZmF1bHRcIiB8IFwic21hbGxcIiB8IFwibWVkaXVtXCIgfCBcImxhcmdlXCI7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3Bpbm5lciB7XG4gIGJkQ29sb3I/OiBzdHJpbmc7XG4gIHNpemU/OiBTaXplO1xuICBjb2xvcj86IHN0cmluZztcbiAgdHlwZT86IHN0cmluZztcbiAgZnVsbFNjcmVlbj86IGJvb2xlYW47XG4gIHpJbmRleD86IG51bWJlcjtcbiAgdGVtcGxhdGU/OiBzdHJpbmc7XG4gIHNob3dTcGlubmVyPzogYm9vbGVhbjtcbn1cblxuZXhwb3J0IGNsYXNzIE5neFNwaW5uZXIge1xuICBuYW1lOiBzdHJpbmc7XG4gIGJkQ29sb3I6IHN0cmluZztcbiAgc2l6ZTogU2l6ZTtcbiAgY29sb3I6IHN0cmluZztcbiAgdHlwZTogc3RyaW5nO1xuICBjbGFzczogc3RyaW5nO1xuICBkaXZDb3VudDogbnVtYmVyO1xuICBkaXZBcnJheTogQXJyYXk8bnVtYmVyPjtcbiAgZnVsbFNjcmVlbjogYm9vbGVhbjtcbiAgc2hvdzogYm9vbGVhbjtcbiAgekluZGV4OiBudW1iZXI7XG4gIHRlbXBsYXRlOiBzdHJpbmc7XG4gIHNob3dTcGlubmVyOiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKGluaXQ/OiBQYXJ0aWFsPE5neFNwaW5uZXI+KSB7XG4gICAgT2JqZWN0LmFzc2lnbih0aGlzLCBpbml0KTtcbiAgfVxuXG4gIHN0YXRpYyBjcmVhdGUoaW5pdD86IFBhcnRpYWw8Tmd4U3Bpbm5lcj4pOiBOZ3hTcGlubmVyIHtcbiAgICBpZiAoIWluaXQ/LnRlbXBsYXRlICYmIChpbml0Py50eXBlID09IG51bGwgfHwgaW5pdC50eXBlLmxlbmd0aCA9PT0gMCkpIHtcbiAgICAgIGNvbnNvbGUud2FybihgW25neC1zcGlubmVyXTogUHJvcGVydHkgXCJ0eXBlXCIgaXMgbWlzc2VkLiBQbGVhc2UsIHByb3ZpZGUgYW5pbWF0aW9uIHR5cGUgdG8gPG5neC1zcGlubmVyPiBjb21wb25lbnRcbiAgICAgICAgYW5kIGVuc3VyZSBjc3MgaXMgYWRkZWQgdG8gYW5ndWxhci5qc29uIGZpbGVgKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBOZ3hTcGlubmVyKGluaXQpO1xuICB9XG59XG4iXX0=